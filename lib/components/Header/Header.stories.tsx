import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";
import Toolname from "@/assets/tool-name.svg";

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
    endSlot: <div className="text-gray-100 mr-2">End slot content</div>,
    ghRepoName: "graypaper-reader",
    toolNameSrc: Toolname,
  },
};
