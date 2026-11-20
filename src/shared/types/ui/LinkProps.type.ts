import type { ClassProps } from "../";

type LinkProps = ClassProps & {
  href: string;
  displayText?: string;
};

type SideBarLinkProps = LinkProps & {
  isActive?: boolean;
};

export type { LinkProps, SideBarLinkProps };
