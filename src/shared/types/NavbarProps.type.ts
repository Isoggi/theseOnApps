import type { ClassProps } from ".";
import type { IAppRouteItem } from "../interfaces";
import type { IMenuRouteItem } from "../interfaces/approute.interface";

type NavbarProps = ClassProps & {
  routes?: IAppRouteItem[];
};

type SideBarProps = ClassProps & {
  routes?: IMenuRouteItem[];
};
export type { NavbarProps, SideBarProps };
