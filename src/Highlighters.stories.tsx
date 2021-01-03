import { Story, Meta } from "@storybook/react/types-6-0";
import { Add, Remove } from "./Highlighters";

export default {
  title: "Components/Highlighters",
  component: Add,
} as Meta;

export const Both: Story = () => (
  <p>
    Lorem <Add>ipsum</Add> dolor <Remove>sit</Remove> amet.
  </p>
);

export const AddStory: Story = () => (
  <p>
    <Add>Lorem ipsum dolor sit amet.</Add>
  </p>
);
AddStory.storyName = "Add";

export const RemoveStory: Story = () => (
  <p>
    <Remove>Lorem ipsum dolor sit amet.</Remove>
  </p>
);
RemoveStory.storyName = "Remove";
