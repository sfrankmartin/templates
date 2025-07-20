# Next 15 + Rails 8 + PG 17 Template

This is a template for a project that uses Next.js 15, Rails 8, and PostgreSQL 17.

### Requirements

- Docker
- Docker Compose
- nvm (for Node.js version management)
- pnpm (for package management)
- rvm (for Ruby version management)

### Running

Spin up Rails and PostgreSQL with Docker Compose:

```bash
docker compose up -d
```

Install packages and start Next.js development server:

```bash
pnpm install # root level dependencies
pnpm --filter ./frontend install
pnpm --filter ./frontend dev
```

## Testing

For Rails tests:

```bash
docker compose run --rm api rspec
```

For Next.js tests:

```bash
pnpm --filter ./frontend test
```
