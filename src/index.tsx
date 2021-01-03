import { FunctionComponent, TextareaHTMLAttributes } from "react";

type StringTextarea = TextareaHTMLAttributes<string>;
type StringValue = Exclude<StringTextarea["value"], number>;

export interface TextareaDifferenceVisualiserAttributes extends StringTextarea {
  value?: StringValue;
  defaultValue?: StringValue;
}

export const TextareaDifferenceVisualiser: FunctionComponent<TextareaDifferenceVisualiserAttributes> = (
  properties,
) => <textarea {...properties} />;

export default TextareaDifferenceVisualiser;
