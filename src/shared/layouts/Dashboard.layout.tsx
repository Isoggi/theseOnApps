import { Outlet } from "react-router";
import { SideBarComponent } from "../components";

export function DashboardLayout() {
  return (
    <>
      <SideBarComponent />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
    </>
  );
}
