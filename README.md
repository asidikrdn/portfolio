# Ahmad Sidik Rudini — Personal Page

Personal portfolio site for Ahmad Sidik Rudini, Backend Developer & Automation Engineer. Built with TanStack Start, planned to be deployed to Railway or a self-hosted VPS.

## Tech Stack

- **Framework** — [TanStack Start](https://tanstack.com/start) (React + file-based routing)
- **UI** — [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) + [Tailwind CSS v4](https://tailwindcss.com/)
- **Build** — [Vite](https://vitejs.dev/) via `@lovable.dev/vite-tanstack-config`
- **Deployment** — [Railway](https://railway.app/) or self-hosted VPS (Nginx + Docker)
- **Package Manager** — [Bun](https://bun.sh/)

## Pages

| Route        | Description                    |
| ------------ | ------------------------------ |
| `/`          | Home / hero                    |
| `/about`     | Background, skills & education |
| `/portfolio` | Project showcase               |
| `/services`  | Services offered               |
| `/contact`   | Contact form                   |

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Deployment

### Railway

1. Push the repo to GitHub.
2. Create a new project on [Railway](https://railway.app/) and connect the repo.
3. Railway will auto-detect the build command (`bun build`) and start command (`bun preview` or a custom server entry).

### VPS (Docker + Nginx)

```bash
# Build the image
docker build -t personal-page .

# Run the container
docker run -d -p 3000:3000 personal-page
```

Then point Nginx (or Cloudflare Tunnel) to `localhost:3000`.

## Linting & Formatting

```bash
bun lint      # ESLint
bun format    # Prettier
```
