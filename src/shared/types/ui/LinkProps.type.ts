import type { ClassProps } from "../";

export type LinkProps = ClassProps & {
  href: string;
  displayText?: string;
};
