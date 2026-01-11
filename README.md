# soongle-ui

A premium, modern design system library for React.js and Next.js, built on top of **Tailwind CSS v4**.

Read this in other languages: [English](README.md), [한국어](README.ko.md)

## ✨ Features

- 🎨 **Utility-First**: Powered by Tailwind CSS v4 for ultimate flexibility.
- 🛠️ **Type-Safe**: Written in TypeScript with full IntelliSense support.
- 📦 **Tree-Shakable**: Only include the components you actually use.
- 🚀 **Next.js Optimized**: Built with Server Components and SSR in mind.

## 🚀 Installation

```bash
npm install soongle-ui
```

## 🛠️ Setup

### 1. Import Styles

If you are **not** using Tailwind CSS in your project, import the library's stylesheet in your root entry file (e.g., `app/layout.tsx` for Next.js, or `src/main.tsx` for Vite).

```tsx
import 'soongle-ui/styles.css';
```

#### 💡 If you are already using Tailwind CSS

If your project already has Tailwind CSS installed, **do not** import `soongle-ui/styles.css`. Instead, add the library's component path to your Tailwind configuration to avoid duplicate styles and keep your bundle clean.

##### For Tailwind CSS v3 (`tailwind.config.ts`)
Add the `soongle-ui` distribution path to the `content` array:

```ts
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/soongle-ui/dist/**/*.{js,ts,jsx,tsx}", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

##### For Tailwind CSS v4
Tailwind v4 automatically scans `node_modules`. However, you should ensure your `@theme` and custom variables are consistent with the library. For the best experience, just ensure your root CSS includes:

```css
@import "tailwindcss";
@source "../node_modules/soongle-ui";
```

## 📖 Usage

### Using the Text Component

```tsx
import { Text } from 'soongle-ui';

function App() {
  return (
    <div className="p-8 space-y-4">
      <Text size="5xl" weight="black" color="primary">
        Hello Soongle!
      </Text>
      <Text size="base" color="muted">
        This is a pre-styled text component using Tailwind defaults.
      </Text>
    </div>
  );
}
```

## 🏗️ Available Components

| Component | Description |
| :--- | :--- |
| `Button` | Interactive button component with various variants. |
| `Text` | Semantic text component with support for all Tailwind font utilities. |
| (More coming soon...) | Stay tuned for more high-quality components. |

## 🧩 Requirements

- **React**: 18.x or 19.x
- **Tailwind CSS**: v4.x (The library includes styles, but works best in a Tailwind project)

---
Developed by Soongle.
