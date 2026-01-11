# soongle-ui

A modern design system library for React.js and Next.js, built on top of **Tailwind CSS v4**.

Read this in other languages: <a href="https://github.com/s00ngle/soongle-ui/blob/master/README.md" target="_blank">English</a> | <a href="https://github.com/s00ngle/soongle-ui/blob/master/README.ko.md" target="_blank">한국어</a>

---

## ✨ Features

- 🎨 **Utility-First**: Powered by Tailwind CSS v4 for ultimate flexibility and performance.
- 🛠️ **Type-Safe**: Fully written in TypeScript with comprehensive IntelliSense support.
- 📦 **Minimal Footprint**: Optimized with Tree-shaking and Minification to keep your bundle light.
- 🚀 **Framework Ready**: Seamless integration with Next.js (App Router), Vite, and more.

## 🚀 Installation

Install the package via your favorite package manager:

```bash
# npm
npm install soongle-ui

# yarn
yarn add soongle-ui

# pnpm
pnpm add soongle-ui
```

## 🛠️ Setup Guide

To ensure components are styled correctly, follow the setup guide based on your project configuration.

### Case 1: Standard Project (No Tailwind)

If you are **not** using Tailwind CSS in your project, import the pre-compiled stylesheet in your root entry file:

```tsx
// For Next.js (app/layout.tsx) or Vite (src/main.tsx)
import 'soongle-ui/styles.css';
```

### Case 2: Tailwind CSS Project (Recommended)

If your project already uses Tailwind CSS, **do not** import `soongle-ui/styles.css`. Instead, include the library in your Tailwind configuration to leverage shared theme tokens and avoid duplicate styles.

#### For Tailwind CSS v4
Tailwind v4 scans your modules automatically. Simply ensure your root CSS file includes the `@source` directive:

```css
@import "tailwindcss";
@source "../node_modules/soongle-ui";
```

#### For Tailwind CSS v3 (`tailwind.config.ts`)
Add the library path to your `content` array:

```ts
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/soongle-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```

## 📖 Component Usage

### Text Component
The `Text` component supports various sizes, weights, and colors derived from Tailwind defaults.

```tsx
import { Text } from 'soongle-ui';

function Example() {
  return (
    <div className="flex flex-col gap-4">
      <Text size="5xl" weight="black" color="primary">
        Modern UI with Soongle
      </Text>
      <Text size="base" color="muted">
        Build beautiful interfaces faster with pre-styled components.
      </Text>
    </div>
  );
}
```

## 🏗️ Roadmap

| Component | Status | Description |
| :--- | :---: | :--- |
| `Button` | ✅ | Primary, Secondary, and Ghost variants with loading states. |
| `Text` | ✅ | Semantic typography with full Tailwind utility support. |
| `Input` | ⏳ | Accessible form inputs and validations. |
| `Card` | ⏳ | Flexible container for diverse content layouts. |

## 🧩 Requirements

- **React**: `^18.0.0` or `^19.0.0`
- **Tailwind CSS**: `v4.x` recommended (compatible with `v3.x`)

---
Developed by **Soongle**.
