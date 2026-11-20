import type { IAppRouteItem } from "../interfaces";
import { menuRouteStorage, routeStorage } from "../services";
// import { getFetch } from "./";
import { appRoute, menuRoute } from "../../assets/data";
import type { IMenuRouteItem } from "../interfaces/approute.interface";
function GetNavbarRoute(useFetch?: string): IAppRouteItem[] {
  console.log("Get Navbar Route");
  if (routeStorage.getRoute().length) {
    return routeStorage.getRoute();
  }
  // if (useFetch) {
  //   const appRouteFetch: IAppRouteItem[] =
  //     getFetch() as unknown as IAppRouteItem[];
  //   return appRouteFetch;
  // }
  const jsonAppRoute = appRoute as IAppRouteItem[];
  routeStorage.setRoute(jsonAppRoute);

  return jsonAppRoute;
}

function GetMenuRoute(useFetch?: string): IMenuRouteItem[] {
  console.log("Get Menu Route");
  if (menuRouteStorage.getRoute().length) {
    return menuRouteStorage.getRoute();
  }
  // if (useFetch) {
  //   const menuRouteFetch: IMenuRouteItem[] =
  //     getFetch() as unknown as IMenuRouteItem[];
  //   return menuRouteFetch;
  // }
  const jsonMenuRoute = menuRoute as IMenuRouteItem[];
  menuRouteStorage.setRoute(menuRoute);
  return jsonMenuRoute;
}

export { GetMenuRoute, GetNavbarRoute };
