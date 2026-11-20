import { Outlet } from "react-router";
import {
  NavbarComponent,
  FooterComponent,
  SideBarComponent,
} from "../components";
import type { ClassProps } from "../types";

export function RootLayout({ className }: ClassProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <NavbarComponent className={className} />

      <div className="flex flex-1">
        <SideBarComponent />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
      <FooterComponent />
    </div>
  );
}
