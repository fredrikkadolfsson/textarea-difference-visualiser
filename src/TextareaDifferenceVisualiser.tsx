import { FC, useMemo } from "react";
import { Add, Remove } from "./Highlighters";
import ReactResizeDetector from "react-resize-detector";

type StringTextarea = JSX.IntrinsicElements["textarea"];
type StringValue = Exclude<StringTextarea["value"], number>;

export interface TextareaDifferenceVisualiserAttributes extends StringTextarea {
  defaultValue?: StringValue;
  targetValue?: StringValue;
  value?: StringValue;
}

export const TextareaDifferenceVisualiser: FC<TextareaDifferenceVisualiserAttributes> = ({
  style,
  targetValue,
  value,
  ...restProperties
}) => {
  const highlightedValue = useMemo(
    () => [
      "<head>\n  <title>A Meaningful Page Title",
      <Remove key="remove">{"<script />"}</Remove>,
      "</title>\n  <p>",
      <Add key="add">{"</p>"}</Add>,
      "\n</head>",
    ],
    [targetValue],
  );

  return (
    <div style={{ position: "relative" }}>
      <ReactResizeDetector handleWidth handleHeight>
        {({
          targetRef,
          height,
          width,
        }: {
          targetRef?: React.Ref<HTMLElement>;
          height: number;
          width: number;
        }) => (
          <>
            <pre
              style={{
                letterSpacing: "0.2px",
                margin: 0,
                overflow: "hidden",
                padding: "3px",
                ...style,
                height,
                width,
              }}
              {...restProperties}
            >
              {highlightedValue}
            </pre>
            <textarea
              ref={targetRef}
              value={value}
              style={{
                backgroundColor: "transparent",
                height,
                position: "absolute",
                top: 0,
                width,
                ...style,
              }}
              spellCheck="false"
              translate="no"
              {...restProperties}
            />
          </>
        )}
      </ReactResizeDetector>
    </div>
  );
};

export default TextareaDifferenceVisualiser;
