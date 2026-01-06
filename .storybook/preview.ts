import type { Preview } from "@storybook/react-vite";
import "../src/styles.css"; // Tailwind CSS 파일 import

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
