interface IAppRouteItem {
  url: string;
  displayText: string;
}

interface IMenuRouteItem extends IAppRouteItem {
  isParent?: boolean;
  childrenNode?: IAppRouteItem[];
  parameter?: unknown;
}

export type { IAppRouteItem, IMenuRouteItem };
