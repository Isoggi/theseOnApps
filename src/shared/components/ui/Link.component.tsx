import type React from "react";
import type { LinkProps, SideBarLinkProps } from "../../types/ui";
import { NavLink } from "react-router";

const Link: React.FC<LinkProps> = ({ href, displayText, className }) => {
  return (
    <a
      href={href}
      className={`text-xl font-bold tracking-tight text-slate-900 ${className ?? ""}`}
    >
      {displayText && displayText}
    </a>
  );
};

const SideBarLink: React.FC<SideBarLinkProps> = ({
  href,
  displayText,
  className,
  isActive = false,
}) => {
  return (
    <NavLink
      to={href}
      className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${className ? className + " " : ""}${
        isActive
          ? "bg-sky-50 text-sky-700 border-l-4 border-sky-600"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {displayText}
    </NavLink>
  );
};
export { Link, SideBarLink };
