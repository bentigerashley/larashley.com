# Lara Ashley Ceramics

A small Next.js portfolio with two public galleries and a two-person Google-authenticated image admin.

## Local setup

1. Copy `.env.example` to `.env.local` and fill in Google OAuth, NextAuth and Cloudinary values.
2. Run `npm install`.
3. Run `npm run dev` and open `http://localhost:3000`.
4. Open `http://localhost:3000/admin` for the admin sign-in.

Only `lara.ashley@gmail.com` and `bentiger.ashley@gmail.com` are accepted. Uploads require alt text and go directly from the browser to signed Cloudinary folders. Deletion is server-authorized and restricted to `larashley/functional/*` and `larashley/art/*`.

## Google OAuth

Create a Google OAuth web client and add these authorized redirect URIs:

- `http://localhost:3000/api/auth/callback/google`
- `https://admin.larashley.com/api/auth/callback/google`

Use `http://localhost:3000` as `NEXTAUTH_URL` locally and `https://admin.larashley.com` in production.

## Vercel

Import this repository into one Vercel project, add the environment variables from `.env.example`, and attach both `larashley.com` and `admin.larashley.com`. The Next.js rewrite sends the admin hostname root to `/admin`; both domains use the same deployment.

Vercel Hobby is not intended for commercial sites, so confirm the current plan terms before launch.

## Checks

```sh
npm test
npm run typecheck
npm run build
```
