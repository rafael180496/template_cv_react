import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "cv-theme";

const readStored = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null; // modo privado o storage bloqueado
  }
};

const systemTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

/**
 * Tema claro/oscuro. El valor inicial lo dejó el script inline de index.html
 * —que corre antes del primer pintado— así que aquí sólo se lee la clase que
 * ya está puesta: recalcularlo provocaría un parpadeo.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Mientras el usuario no elija, el CV sigue al sistema operativo.
  useEffect(() => {
    if (readStored()) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(systemTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* la preferencia no se persiste, el tema igual cambia */
      }
      return next;
    });
  }, []);

  return { theme, isDark: theme === "dark", toggle };
};
