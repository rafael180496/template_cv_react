import { useState } from "react";
import { getInitials } from "../service/util";
import avatarImg from "../assets/img/avatar.jpg";

/**
 * Foto de perfil con respaldo en iniciales: si la imagen no carga, el hueco
 * circular vacío se lee como un error de la página, no como "sin foto".
 */
const Avatar = ({ name, className = "", size = "lg" }) => {
  const [failed, setFailed] = useState(false);
  const text = size === "lg" ? "text-4xl lg:text-5xl" : "text-lg";

  return (
    <div
      className={`relative overflow-hidden rounded-full bg-white/20 ring-4 ring-white/30 shadow-2xl ${className}`}
    >
      {failed ? (
        <span
          className={`flex h-full w-full items-center justify-center font-bold text-white ${text}`}
        >
          {getInitials(name)}
        </span>
      ) : (
        <img
          src={avatarImg}
          alt={name}
          width="400"
          height="400"
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default Avatar;
