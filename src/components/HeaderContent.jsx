import { useLang } from "../provider/langContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { SECTIONS, SECTION_IDS } from "../service/sections";
import { getInitials } from "../service/util";
import SocialCard from "./SocialCard";
import ThemeToggle from "./ThemeToggle";

const NavLinks = ({ nav, active, className = "" }) => (
  <ul className={`flex items-center gap-1 ${className}`}>
    {SECTIONS.map(({ id, key }) => {
      const isActive = active === id;
      return (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={isActive ? "true" : undefined}
            className={`block whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            {nav[key]}
          </a>
        </li>
      );
    })}
  </ul>
);

const HeaderContent = () => {
  const { datalang, otherLang, toggleLang } = useLang();
  const { info, nav, ui } = datalang;
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="d-print-none sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md border-gray-200 dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3"
            aria-label={info.name}
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white dark:bg-primary-500 dark:text-slate-950">
              {getInitials(info.name)}
            </span>
            <span className="hidden min-w-0 flex-col sm:flex">
              <span className="truncate text-sm font-bold text-gray-900 dark:text-white">
                {info.name}
              </span>
              <span className="truncate text-xs text-gray-500 dark:text-slate-400">
                {ui.role}
              </span>
            </span>
          </a>

          <nav aria-label={nav.about} className="hidden md:block">
            <NavLinks nav={nav} active={active} />
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle ui={ui} />
            <button
              type="button"
              onClick={toggleLang}
              className="btn btn-ghost h-9 gap-1.5 px-2.5 text-sm font-semibold uppercase"
              aria-label={ui.switchLang}
              title={ui.switchLang}
            >
              <i className="fas fa-language" aria-hidden="true"></i>
              {otherLang}
            </button>
            <span className="mx-1 hidden h-6 w-px bg-gray-200 sm:block dark:bg-slate-700" />
            <div className="hidden items-center gap-1.5 sm:flex">
              {info.social.map((item) => (
                <SocialCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* En móvil la navegación va en su propia fila, deslizable. */}
        <nav
          aria-label={nav.about}
          className="-mx-4 overflow-x-auto px-4 pb-2 md:hidden"
        >
          <NavLinks nav={nav} active={active} className="w-max" />
        </nav>
      </div>
    </header>
  );
};

export default HeaderContent;
