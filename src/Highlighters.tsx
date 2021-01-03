import { FunctionComponent } from "react";

export const Remove: FunctionComponent = (properties) => (
  <mark
    {...properties}
    style={{ backgroundColor: "#f9b5c5", borderRadius: "2px" }}
  />
);

export const Add: FunctionComponent = (properties) => (
  <mark
    {...properties}
    style={{ backgroundColor: "#9befd9", borderRadius: "2px" }}
  />
);
