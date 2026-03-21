# Kudu

A modern, open-source system cleaner for Windows, macOS, and Linux built with Electron.

## Releasing

All releases are done via a single command:

```
npm run release -- patch|minor|major
```

This handles everything: version bump, changelog generation, commit, tag, push, and triggers CI to build and publish.

## Testing

```
npm test              # run all tests once (vitest run)
npm run test:watch    # run tests in watch mode
npm run validate:rules # validate rule JSON files against schema
```

## Development

```
npm run dev
```
