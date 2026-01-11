# soongle-ui

**Tailwind CSS v4**를 기반으로 한 React.js 및 Next.js용 현대적 디자인 시스템 라이브러리입니다.

다른 언어로 보기: <a href="https://github.com/s00ngle/soongle-ui/blob/master/README.md" target="_blank">English</a> | <a href="https://github.com/s00ngle/soongle-ui/blob/master/README.ko.md" target="_blank">한국어</a>

---

## ✨ 주요 특징

- 🎨 **Utility-First**: Tailwind CSS v4의 성능과 유연성을 그대로 활용합니다.
- 🛠️ **Type-Safe**: TypeScript로 작성되어 완벽한 타입 추론과 자동 완성을 지원합니다.
- 📦 **최적화된 배포**: Tree-shaking 및 Minification이 적용되어 번들 크기를 최소화합니다.
- 🚀 **프레임워크 최적화**: Next.js(App Router), Vite 등 현대적인 환경에 최적화되어 설계되었습니다.

## 🚀 설치 방법

원하시는 패키지 매니저를 통해 설치하세요:

```bash
# npm
npm install soongle-ui

# yarn
yarn add soongle-ui

# pnpm
pnpm add soongle-ui
```

## 🛠️ 설정 가이드

프로젝트 환경에 따라 스타일을 올바르게 적용하기 위해 아래 가이드를 확인하세요.

### Case 1: 일반 프로젝트 (Tailwind를 사용하지 않는 경우)

기본적으로 라이브러리에서 제공하는 미리 빌드된 스타일시트를 루트 파일에서 임포트해야 합니다.

```tsx
// Next.js (app/layout.tsx) 또는 Vite (src/main.tsx) 등
import 'soongle-ui/styles.css';
```

### Case 2: Tailwind CSS를 이미 사용 중인 경우 (권장)

이미 프로젝트에 Tailwind가 설치되어 있다면 `soongle-ui/styles.css`를 **임포트하지 마세요.** 대신 사용자의 Tailwind 설정에 라이브러리 경로를 추가하여 스타일 중복을 방지하고 최적화된 테마를 공유할 수 있습니다.

#### Tailwind CSS v4 사용 시
v4는 자동으로 모듈을 스캔합니다. 루트 CSS 파일에 아래와 같이 `@source` 지시어를 추가하세요:

```css
@import "tailwindcss";
@source "../node_modules/soongle-ui";
```

#### Tailwind CSS v3 (`tailwind.config.ts`) 사용 시
`content` 배열에 라이브러리 배포 경로를 추가합니다:

```ts
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/soongle-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```

## 📖 사용 예시

### Text 컴포넌트
`Text` 컴포넌트는 Tailwind의 모든 폰트 유틸리티를 타입 기반으로 편리하게 사용할 수 있게 해줍니다.

```tsx
import { Text } from 'soongle-ui';

function Example() {
  return (
    <div className="flex flex-col gap-4">
      <Text size="5xl" weight="black" color="primary">
        Soongle UI로 현대적인 웹 개발하기
      </Text>
      <Text size="base" color="muted">
        미리 스타일링된 컴포넌트로 더 빠르게 인터페이스를 구축하세요.
      </Text>
    </div>
  );
}
```

## 🏗️ 컴포넌트 로드맵

| 컴포넌트 | 상태 | 설명 |
| :--- | :---: | :--- |
| `Button` | ✅ | 다양한 스타일과 로딩 상태를 지원하는 버튼. |
| `Text` | ✅ | Tailwind 유틸리티를 완벽히 지원하는 시맨틱 타이포그래피. |
| `Input` | ⏳ | 접근성이 고려된 유효성 검사 지원 입력창. |
| `Card` | ⏳ | 다양한 콘텐츠 레이아웃을 위한 유연한 컨테이너. |

## 🧩 요구 사항

- **React**: `^18.0.0` 또는 `^19.0.0`
- **Tailwind CSS**: `v4.x` 권장 (`v3.x` 호환 가능)

---
**Soongle**이 개발하고 관리합니다.
