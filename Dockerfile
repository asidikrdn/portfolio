# ── Build stage ─────────────────────────────────────────────────────────────
FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ── Serve stage ──────────────────────────────────────────────────────────────
FROM oven/bun:1-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist/client ./dist/client
COPY --from=builder /app/dist/server ./dist/server

RUN printf '%s\n' \
    'import app from "./dist/server/index.js";' \
    'const port = Number(process.env.PORT) || 8080;' \
    'Bun.serve({' \
    '  port,' \
    '  async fetch(req) {' \
    '    const url = new URL(req.url);' \
    '    if (url.pathname.startsWith("/assets/")) {' \
    '      const file = Bun.file("./dist/client" + url.pathname);' \
    '      if (await file.exists()) return new Response(file);' \
    '    }' \
    '    return app.fetch(req, {}, { waitUntil: () => {}, passThroughOnException: () => {} });' \
    '  },' \
    '});' \
    'console.log(`Server running on port ${port}`);' \
    > server.js

EXPOSE 8080

CMD ["bun", "server.js"]
