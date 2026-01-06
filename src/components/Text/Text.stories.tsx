import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: [
        "p",
        "span",
        "div",
        "label",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
      ],
      description: "HTML 요소 타입",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"],
      description: "텍스트 크기",
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
      description: "폰트 두께",
    },
    color: {
      control: "select",
      options: [
        "default",
        "muted",
        "primary",
        "secondary",
        "danger",
        "success",
      ],
      description: "텍스트 색상",
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "텍스트 정렬",
    },
    children: {
      control: "text",
      description: "텍스트 내용",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a default text",
  },
};

export const Heading1: Story = {
  args: {
    as: "h1",
    size: "4xl",
    weight: "bold",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    size: "3xl",
    weight: "bold",
    children: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
    size: "2xl",
    weight: "semibold",
    children: "Heading 3",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
    size: "base",
    children: "This is a paragraph text with normal weight and default color.",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    color: "muted",
    children: "This is small muted text",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    weight: "medium",
    children: "This is primary colored text",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    weight: "semibold",
    children: "This is danger text",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    weight: "medium",
    children: "This is success text",
  },
};

export const CenterAligned: Story = {
  args: {
    align: "center",
    size: "lg",
    children: "This text is center aligned",
  },
  parameters: {
    layout: "padded",
  },
};

export const RightAligned: Story = {
  args: {
    align: "right",
    size: "lg",
    children: "This text is right aligned",
  },
  parameters: {
    layout: "padded",
  },
};

export const LargeText: Story = {
  args: {
    size: "3xl",
    weight: "bold",
    color: "primary",
    children: "Large Primary Text",
  },
};

export const Label: Story = {
  args: {
    as: "label",
    size: "sm",
    weight: "medium",
    children: "Form Label",
  },
};
