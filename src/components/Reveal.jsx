import { useReveal } from "../hooks/useReveal";

/**
 * Envoltorio de animación de entrada. `delay` escalona los elementos de una
 * lista; `variant` elige la dirección.
 */
const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) => {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
