import type { IAppRouteItem } from "../interfaces";
import { routeStorage } from "../services";
// import { getFetch } from "./";
import { appRoute } from "../../assets/data";
export function GetNavbarRoute(useFetch?: string): IAppRouteItem[] {
  if (routeStorage.getRoute()) {
    return routeStorage.getRoute();
  }
  // if (useFetch) {
  //   const appRouteFetch: IAppRouteItem[] =
  //     getFetch() as unknown as IAppRouteItem[];
  //   return appRouteFetch;
  // }
  const jsonAppRoute = appRoute as IAppRouteItem[];

  return jsonAppRoute;
}
