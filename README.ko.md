# soongle-ui

**Tailwind CSS v4**를 기반으로 한 React.js 및 Next.js용 프리미엄 현대적 디자인 시스템 라이브러리입니다.

다른 언어로 보기: [English](README.md), [한국어](README.ko.md)

## ✨ 특징

- 🎨 **Utility-First**: Tailwind CSS v4를 활용한 최상의 유연성.
- 🛠️ **Type-Safe**: TypeScript로 작성되어 완벽한 IntelliSense 지원.
- 📦 **Tree-Shakable**: 실제로 사용하는 컴포넌트만 번들에 포함.
- 🚀 **Next.js 최적화**: 서버 컴포넌트 및 SSR을 고려하여 설계됨.

## 🚀 설치

```bash
npm install soongle-ui
```

## 🛠️ 설정

### 1. 스타일 임포트

프로젝트에서 Tailwind CSS를 **사용하지 않는** 경우, 루트 엔트리 파일(예: Next.js의 `app/layout.tsx` 또는 Vite의 `src/main.tsx`)에서 라이브러리의 스타일시트를 임포트해야 합니다.

```tsx
import 'soongle-ui/styles.css';
```

#### 💡 이미 Tailwind CSS를 사용 중인 경우

이미 프로젝트에 Tailwind CSS가 설치되어 있다면, `soongle-ui/styles.css`를 **임포트하지 마세요.** 대신, 스타일 중복을 방지하고 번들 크기를 최적화하기 위해 Tailwind 설정에 라이브러리의 컴포넌트 경로를 추가하세요.

##### Tailwind CSS v3 (`tailwind.config.ts`) 사용 시
`content` 배열에 `soongle-ui` 배포 경로를 추가합니다:

```ts
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/soongle-ui/dist/**/*.{js,ts,jsx,tsx}", // 이 라인 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

##### Tailwind CSS v4 사용 시
Tailwind v4는 자동으로 `node_modules`를 스캔합니다. 하지만 최상의 경험을 위해 루트 CSS에 다음 내용을 확인하세요:

```css
@import "tailwindcss";
@source "../node_modules/soongle-ui";
```

## 📖 사용 방법

### Text 컴포넌트 사용 예시

```tsx
import { Text } from 'soongle-ui';

function App() {
  return (
    <div className="p-8 space-y-4">
      <Text size="5xl" weight="black" color="primary">
        안녕하세요 Soongle!
      </Text>
      <Text size="base" color="muted">
        Tailwind 기본값을 사용하는 미리 스타일링된 텍스트 컴포넌트입니다.
      </Text>
    </div>
  );
}
```

## 🏗️ 제공되는 컴포넌트

| 컴포넌트 | 설명 |
| :--- | :--- |
| `Button` | 다양한 배리언트를 지원하는 인터랙티브 버튼 컴포넌트. |
| `Text` | 모든 Tailwind 폰트 유틸리티를 지원하는 시맨틱 텍스트 컴포넌트. |
| (추가 예정...) | 더 많은 고품질 컴포넌트가 곧 추가될 예정입니다. |

## 🧩 요구 사항

- **React**: 18.x 또는 19.x
- **Tailwind CSS**: v4.x (라이브러리에 스타일이 포함되어 있지만, Tailwind 프로젝트에서 가장 잘 작동합니다)

---
Developed by Soongle.
