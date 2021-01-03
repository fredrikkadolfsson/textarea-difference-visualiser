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
) => (
  <div
    style={{ padding: "25px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
  >
    <TextareaDifferenceVisualiser
      rows={10}
      style={{ width: "500px" }}
      {...properties}
    />
  </div>
);

export const Empty = Template;
Empty.args = {
  defaultValue: `<head>
  <title>A Meaningful Page Title<script /></title>
  <p>
</head>`,
  targetValue: `<head>
  <title>A Meaningful Page Title</title>
  <p></p>
</head>`,
};
