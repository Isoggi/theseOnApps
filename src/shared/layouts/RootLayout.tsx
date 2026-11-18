import { NavLink, Outlet } from "react-router";
import {
  NavbarComponent,
  FooterComponent,
  SideBarComponent,
} from "../components";
import { GetNavbarRoute } from "../utils";

export function RootLayout() {
  const routes = GetNavbarRoute();
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <NavbarComponent routes={routes} classname={""} />

      <SideBarComponent />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
