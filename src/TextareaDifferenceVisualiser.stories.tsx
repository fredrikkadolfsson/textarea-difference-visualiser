import { Story, Meta } from "@storybook/react/types-6-0";
import {
  TextareaDifferenceVisualiser,
  TextareaDifferenceVisualiserAttributes,
} from "./TextareaDifferenceVisualiser";

export default {
  title: "Example/TextareaDifferenceVisualiser",
  component: TextareaDifferenceVisualiser,
} as Meta;

const Template: Story<TextareaDifferenceVisualiserAttributes> = (
  properties,
) => <TextareaDifferenceVisualiser {...properties} />;

export const Empty = Template.bind({});
Empty.args = {};
