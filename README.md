# @fluffylabs/shared-ui

Shared UI components library for Fluffy Labs applications

## Features

- React: A JavaScript library for web and native user interfaces.
- TypeScript: A strongly typed superset of JavaScript.
- Tailwind: A utility-first CSS framework.
- Storybook: A frontend workshop for building UI components and pages in isolation. [View live Storybook](http://fluffylabs.dev/shared-ui/)
- Vite: A next generation frontend tooling that runs and builds your library incredibly fast.
- Vitest: A next generation testing framework.
- ESLint: A tool that finds and fixes problems in your code.
- Prettier: A code formatter.
- Husky: A pre-commit hook.
- Github Action: A tool that deploys your Storybook to GitHub page automatically.

## Installation

```bash
npm install @fluffylabs/shared-ui
```

## Development

1. Clone this repository
2. Install dependencies using `pnpm i` (or `npm i` if you like)
3. Run `pnpm dev` to start the local Storybook server

## Scripts

- `dev`: Starts the local Storybook server, use this to develop and preview your components.
- `test`: Runs all your tests with vitest.
- `test:watch`: Runs tests in watch mode.
- `build`: Builds your Storybook as a static web application.
- `build:lib`: Builds your component library with Vite.
- `lint`: Runs ESLint.
- `format`: Formats your code with Prettier.

## Usage

### Basic Import

```tsx
import { AppsSidebar } from "@fluffylabs/shared-ui";
```

### Importing Styles

Use the precompiled styles in your app:

```tsx
// main.tsx or App.tsx
import "@fluffylabs/shared-ui/style.css";
```

### Tailwind Configuration

To prevent class duplication when using Tailwind CSS in your project, add the shared-ui dist folder to your Tailwind content paths:

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../node_modules/@fluffylabs/shared-ui/dist/**/*.js"],
  // ... rest of your config
};
```

### Example Usage

```tsx
import { AppsSidebar } from "@fluffylabs/shared-ui";
import "@fluffylabs/shared-ui/style.css";

function App() {
  return (
    <div className="app">
      <AppsSidebar />
      {/* Your app content */}
    </div>
  );
}
```

For more usage examples and component documentation, visit our [Storybook](http://fluffylabs.dev/shared-ui/).

## Deployment

### Releasing a New Version

Releases are managed through the [Release Workflow](.github/workflows/shared-ui-release.yml):

1. Go to [Actions → Bump Version and Create PR](../../actions/workflows/shared-ui-release.yml)
2. Click "Run workflow"
3. Select:
   - **Branch**: `main` (releases should always be from main)
   - **Version bump type**: `patch`, `minor`, or `major`
4. The workflow will create a pull request with the version bump

The workflow will:

- Bump the version in package.json and package-lock.json
- Create a pull request with the changes
- Include commit history since the last release in the PR description

### NPM Publishing

Once the release PR is merged, the [Publish Workflow](.github/workflows/shared-ui-publish.yml) automatically:

- Detects the version bump commit
- Creates a git tag for the new version
- Creates a GitHub release with commit history
- Builds the component library
- Publishes the package to NPM registry

The publish workflow only runs when:

- A version bump commit (created by the release workflow) is merged to main
- No tag exists yet for that version

### Storybook Deployment

The Storybook is automatically deployed to GitHub Pages and available at:
http://fluffylabs.dev/shared-ui/
