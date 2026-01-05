# soongle-ui

A design system library for React.js and Next.js with TailwindCSS.

## Installation

```bash
npm install soongle-ui
```

## Usage

### 1. Import Styles

Import the CSS file in your root layout or entry file (e.g., `_app.tsx`, `layout.tsx`, or `src/index.tsx`):

```tsx
import 'soongle-ui/styles.css';
```

### 2. Use Components

```tsx
import { Button } from 'soongle-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

## Features

- Built with React and Tailwind CSS
- Fully typed with TypeScript
- Supports Light/Dark modes (if applicable)
- Tree-shakable exports
