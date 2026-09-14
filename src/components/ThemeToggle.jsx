import { useTheme } from "../hooks/useTheme";

const ThemeToggle = ({ ui }) => {
  const { isDark, toggle } = useTheme();
  const label = isDark ? ui.switchToLight : ui.switchToDark;

  return (
    <button
      type="button"
      onClick={toggle}
      className="btn btn-ghost h-9 w-9 !px-0"
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      <i
        className={isDark ? "fas fa-sun" : "fas fa-moon"}
        aria-hidden="true"
      ></i>
    </button>
  );
};

export default ThemeToggle;
