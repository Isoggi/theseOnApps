import type { LinkProps } from "../../types/ui";

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

export default Link;
