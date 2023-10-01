# react-dropzone-esm

`react-dropzone-esm` is a fork of [react-dropzone](https://github.com/react-dropzone/react-dropzone).
The purpose of the fork is to provide a version of `react-dropzone` that is compatible with
modern frameworks which use ES modules (Remix v2, newer versions of Next.js, Vite).

The package provides esm and cjs bundles. It is compatible both with modern build tools
like Remix v2 and with older tools like Webpack 4.

## Installation

With yarn:

```bash
yarn add react-dropzone-esm
```

With npm:

```bash
npm install react-dropzone-esm
```

## Differences from react-dropzone

- ESM and CJS bundles
- Properly configured `package.json` exports
- ESM bundle is shipped with `.mjs` extension
- Unused files are removed from the published package (docs, logos, etc.)

Note that it is not planned to fix any bugs or add new features to this package.
The only purpose of this package is to provide a version of `react-dropzone` that
is compatible with modern frameworks. Source code of `react-dropzone` library is not modified
in any way.

## Documentation

Documentation was removed from the forked package to simplify maintenance. [Please refer to the original package for documentation](https://react-dropzone.js.org/).
