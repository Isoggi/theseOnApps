export interface IAppRouteItem {
  url: string;
  displayText: string;
  isParent?: boolean;
  childrenNode?: IAppRouteItem;
  parameter?: unknown;
}
