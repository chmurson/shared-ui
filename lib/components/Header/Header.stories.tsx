import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const DefaultHeader: Story = {
  args: {
    endSlot: <span className="w-full">End Slot</span>,
  },
};
