import { applyDynamicTokens } from "../service/util";
import Reveal from "./Reveal";

/** Sin acentos y en minúsculas: el mismo dato se rotula distinto en cada idioma. */
const normalize = (text = "") =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const FIELDS = [
  { match: ["edad", "age"], icon: "fas fa-cake-candles" },
  { match: ["correo", "email"], icon: "fas fa-envelope", href: (v) => `mailto:${v}` },
  { match: ["telefono", "phone"], icon: "fas fa-phone", href: (v) => `tel:${v.replace(/[^+\d]/g, "")}` },
  { match: ["direccion", "address"], icon: "fas fa-location-dot" },
  { match: ["identificacion", "cedula", "id"], icon: "fas fa-id-card" },
];

const fieldFor = (title) => {
  const key = normalize(title);
  return FIELDS.find((field) => field.match.some((m) => key.includes(m)));
};

const ContactRow = ({ title, val, delay }) => {
  const field = fieldFor(title);
  const value = applyDynamicTokens(val);
  const href = field?.href?.(value);

  const body = (
    <>
      <i
        className={`${field?.icon ?? "fas fa-circle-info"} mt-0.5 w-4 flex-shrink-0 text-center text-primary-600 dark:text-primary-400`}
        aria-hidden="true"
      ></i>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-slate-500">
          {title}
        </span>
        <span className="block break-words text-gray-700 dark:text-slate-300">
          {value}
        </span>
      </span>
    </>
  );

  return (
    <Reveal as="li" delay={delay}>
      {href ? (
        <a href={href} className="contact-info">
          {body}
        </a>
      ) : (
        <div className="contact-info">{body}</div>
      )}
    </Reveal>
  );
};

const AboutContent = ({ info, titles, ui }) => {
  const aboutme = applyDynamicTokens(info.aboutme);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Reveal className="lg:col-span-2">
        <h2 className="section-title">{titles.about}</h2>
        <p className="whitespace-pre-line leading-relaxed text-gray-600 dark:text-slate-400">
          {aboutme}
        </p>
      </Reveal>

      <div className="lg:col-span-1">
        <Reveal
          as="h3"
          variant="right"
          className="mb-4 text-lg font-semibold text-gray-900 dark:text-white"
        >
          {ui.contactTitle}
        </Reveal>
        <ul className="space-y-1">
          {info.aboutmeitems.map((item, i) => (
            <ContactRow
              key={item.title}
              title={item.title}
              val={item.val}
              delay={i * 60}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutContent;
