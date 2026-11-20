import type { IAppRouteItem } from "../interfaces";
import type { IMenuRouteItem } from "../interfaces/approute.interface";

const routeStorage = {
  getRoute(): IAppRouteItem[] {
    const appRoute = localStorage.getItem("app-routes");

    return appRoute ? (JSON.parse(appRoute) as IAppRouteItem[]) : [];
  },
  setRoute(routes: IAppRouteItem[]): void {
    localStorage.setItem("app-routes", JSON.stringify(routes));
  },
};

const menuRouteStorage = {
  getRoute(): IMenuRouteItem[] {
    const appRoute = localStorage.getItem("menu-routes");

    return appRoute ? (JSON.parse(appRoute) as IAppRouteItem[]) : [];
  },
  setRoute(routes: IMenuRouteItem[]): void {
    localStorage.setItem("menu-routes", JSON.stringify(routes));
  },
};

export { routeStorage, menuRouteStorage };
