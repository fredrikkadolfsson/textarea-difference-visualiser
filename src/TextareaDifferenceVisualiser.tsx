import { FC, TextareaHTMLAttributes } from "react";

type StringTextarea = TextareaHTMLAttributes<string>;
type StringValue = Exclude<StringTextarea["value"], number>;

export interface TextareaDifferenceVisualiserAttributes extends StringTextarea {
  value?: StringValue;
  defaultValue?: StringValue;
}

export const TextareaDifferenceVisualiser: FC<TextareaDifferenceVisualiserAttributes> = (
  properties,
) => <textarea {...properties} />;
