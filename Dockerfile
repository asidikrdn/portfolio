# ── Build stage ─────────────────────────────────────────────────────────────
FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun build

# ── Serve stage ──────────────────────────────────────────────────────────────
# Reuse Bun (already in stack) to serve static files — no nginx dependency
FROM oven/bun:1-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist

# Inline static file server with SPA fallback
RUN printf '%s\n' \
    'const DIST = import.meta.dir + "/dist";' \
    'const index = Bun.file(DIST + "/index.html");' \
    'Bun.serve({' \
    '  port: 8080,' \
    '  async fetch(req) {' \
    '    const path = new URL(req.url).pathname;' \
    '    const file = Bun.file(DIST + path);' \
    '    if (await file.exists()) return new Response(file);' \
    '    const dir = Bun.file(DIST + path + "/index.html");' \
    '    if (await dir.exists()) return new Response(dir);' \
    '    return new Response(index);' \
    '  },' \
    '});' \
    'console.log("Server running on port 8080");' \
    > server.js

EXPOSE 8080

CMD ["bun", "server.js"]
