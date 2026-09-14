import { useEffect, useRef, useState } from "react";

/**
 * Revela un elemento cuando entra en pantalla. Reemplaza a AOS: son ~15 líneas
 * contra una dependencia sin mantenimiento que además cargaba su CSS desde un
 * CDN externo.
 *
 * El observer se desconecta en cuanto revela: la animación es de entrada y
 * seguir observando cuesta trabajo en cada scroll sin cambiar nada.
 */
export const useReveal = ({
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
} = {}) => {
  const ref = useRef(null);
  // Sin soporte del navegador el contenido arranca visible, sin animar.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, visible]);

  return [ref, visible];
};
