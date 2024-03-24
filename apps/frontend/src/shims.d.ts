import type { HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": MyElementAttributes;
    }

    interface MyElementAttributes extends HTMLAttributes {
      icon: string;
      inline: boolean;
    }
  }
}
