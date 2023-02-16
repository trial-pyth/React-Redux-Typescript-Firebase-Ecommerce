declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: ReactFragment.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
