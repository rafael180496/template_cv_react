import { useEffect, useState } from "react";

/**
 * Marca en la navegación la sección que se está leyendo.
 *
 * Se elige la sección visible cuyo borde superior quedó más abajo sin pasar la
 * línea de lectura (un tercio de la pantalla): quedarse con la primera que
 * intersecta deja la anterior marcada hasta que sale por completo.
 */
export const useActiveSection = (ids = []) => {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    if (!ids.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-33% 0px -55% 0px", threshold: 0 }
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};
