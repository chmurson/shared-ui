import type { Meta, StoryObj } from "@storybook/react";
import { DemoLayout } from "./DemoLayout";

const meta = {
  title: "Layout/DemoLayout",
  component: DemoLayout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof DemoLayout>;

export default meta;

type Story = StoryObj<typeof DemoLayout>;

export const DefaultDemoLayout: Story = {};
