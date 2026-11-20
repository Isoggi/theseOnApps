import type { ClassProps } from "../types";
import { GetMenuRoute } from "../utils";
import { SideBarLink } from "./ui";

const SideBarComponent = ({ className }: ClassProps) => {
  const menuItems = GetMenuRoute();
  return (
    <aside className="w-full shrink-0 border-b border-slate-200 bg-white p-4 md:min-h-[calc(100vh-9rem)] md:w-60 md:border-r md:border-b-0 md:p-6">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Menu
      </p>
      <nav aria-label="Main menu" className="flex gap-2 md:flex-col">
        {menuItems.map((item, index) => (
          // <a
          //   key={item.href}
          //   href={item.href}
          //   className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          //     index === 0
          //       ? 'bg-violet-50 text-violet-700'
          //       : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          //   }`}
          // >
          //   {item.label}
          // </a>
          <SideBarLink
            key={index}
            href={item.url}
            displayText={item.displayText}
            className={className}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SideBarComponent;
