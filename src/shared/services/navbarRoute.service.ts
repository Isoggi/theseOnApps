import type { IAppRouteItem } from "../interfaces";

export const routeStorage = {
  getRoute(): IAppRouteItem[] {
    const appRoute = localStorage.getItem("app-routes");

    return appRoute ? (JSON.parse(appRoute) as IAppRouteItem[]) : [];
  },
  setRoute(routes: IAppRouteItem[]): void {
    localStorage.setItem("app-routes", JSON.stringify(routes));
  },
};
