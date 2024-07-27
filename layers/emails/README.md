# Emails Layer Starter

Create Nuxt extendable layer with this GitHub template.

## Setup

Change `.env.example` to `.env` and update Resend API key.

```bash
NUXT_RESEND_API_KEY=
```

Make sure to install the dependencies:

```bash
bun install
```

## Working on your theme

Your theme is at the root of this repository, it is exactly like a regular Nuxt project, except you can publish it on NPM.

The `.playground` directory should help you on trying your theme during development.

Running `bun dev` will prepare and boot `.playground` directory, which imports your theme itself.

## Distributing your theme

Your Nuxt layer is shaped exactly the same as any other Nuxt project, except you can publish it on NPM.

To do so, you only have to check if `files` in `package.json` are valid, then run:

```bash
npm publish --access public
```

Once done, your users will only have to run:

```bash
npm install --save @repo/emails
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: '@repo/emails'
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
bun dev
```

## Production

Build the application for production:

```bash
bun build
```

Or statically generate it with:

```bash
bun generate
```

Locally preview production build:

```bash
bun preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
