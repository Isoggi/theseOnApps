import type { ClassProps } from "../types";
import { GetNavbarRoute } from "../utils";
import { Link } from "./ui";

const NavbarComponent = ({ className }: ClassProps) => {
  const routes = GetNavbarRoute();
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {routes.map((route, index) => {
          return (
            <Link
              key={index}
              href={route.url}
              displayText={route.displayText}
              className={className}
            />
          );
        })}

        <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
          Example workspace
        </span>
      </div>
    </header>
  );
};

export default NavbarComponent;
