import {
  extractTechnologies,
  formatDuration,
  isCurrentPosition,
  positionMonths,
  sortPositions,
  totalSpanMonths,
  stripTechLine,
} from "../service/util";
import Reveal from "./Reveal";

const TONES = {
  primary: {
    dot: "",
    icon: "fas fa-briefcase",
    iconBox:
      "bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300",
    title: "group-hover:text-primary-700 dark:group-hover:text-primary-300",
    employer: "text-primary-600 dark:text-primary-400",
  },
  success: {
    dot: "success",
    icon: "fas fa-graduation-cap",
    iconBox:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
    title: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    employer: "text-emerald-600 dark:text-emerald-400",
  },
};

const WorkCard = ({ work, emp, time, descrip, links, tone, delay, lang, ui }) => {
  const months = positionMonths(time);
  const current = isCurrentPosition(time);
  const technologies = extractTechnologies(descrip);
  const body = stripTechLine(descrip);

  return (
    <Reveal
      delay={delay}
      className={`timeline-card group ${tone.dot}`}
    >
      <div className="card transition-shadow duration-300 hover:shadow-lg">
        <div className="card-body">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 items-start gap-3">
              <span
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${tone.iconBox}`}
              >
                <i className={`${tone.icon} text-sm`} aria-hidden="true"></i>
              </span>
              <div className="min-w-0">
                <h3
                  className={`text-base font-semibold text-gray-900 transition-colors dark:text-white sm:text-lg ${tone.title}`}
                >
                  {work}
                </h3>
                <p className={`text-sm font-medium ${tone.employer}`}>{emp}</p>
              </div>
            </div>

            <div className="flex flex-shrink-0 flex-wrap items-center gap-2 sm:justify-end">
              {current && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {ui.currentBadge}
                </span>
              )}
              <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-slate-700 dark:text-slate-300">
                {time}
              </span>
              {months > 0 && (
                <span className="whitespace-nowrap text-xs text-gray-400 dark:text-slate-500">
                  {formatDuration(months, lang)}
                </span>
              )}
            </div>
          </div>

          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-gray-600 dark:text-slate-400">
            {body}
          </p>

          {technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="sr-only">{ui.techStack}</span>
              {technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/*
            Una credencial que nadie puede comprobar vale menos que una que sí:
            cada certificado enlaza a su página de verificación del emisor.
          */}
          {links?.length > 0 && (
            <ul className="mt-4 flex flex-col gap-1.5 border-t pt-3 border-gray-100 dark:border-slate-700">
              {links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"
                  >
                    <i className="fas fa-certificate" aria-hidden="true"></i>
                    {link.label}
                    <i
                      className="fas fa-arrow-up-right-from-square text-[0.6rem] opacity-70"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  );
};

const WorkContent = ({ works, title, color = "primary", stats = {}, ui, lang }) => {
  const tone = TONES[color] ?? TONES.primary;
  const ordered = sortPositions(works);
  /*
    En experiencia interesa la trayectoria completa: del puesto más antiguo
    hasta hoy. En educación no, porque la lista mezcla un grado con
    certificaciones sueltas — el span iría de 2014 al último curso y diría
    "12 años de estudio". Ahí el número que significa algo es la formación
    más larga.
  */
  const span =
    color === "success"
      ? Math.max(0, ...ordered.map((item) => positionMonths(item.time)))
      : totalSpanMonths(ordered);
  const currentCount = ordered.filter((item) => isCurrentPosition(item.time)).length;

  return (
    <div>
      <Reveal as="h2" className="section-title">
        {title}
      </Reveal>

      <Reveal className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="stat-tile">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {ordered.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-slate-400">
            {color === "success" ? stats.titles : stats.positions}
          </div>
        </div>
        <div className="stat-tile">
          <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
            {span > 0 ? formatDuration(span, lang) : "—"}
          </div>
          <div className="text-sm text-gray-600 dark:text-slate-400">
            {color === "success" ? stats.studyYears : stats.totalExperience}
          </div>
        </div>
        <div className="stat-tile">
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {currentCount}
          </div>
          <div className="text-sm text-gray-600 dark:text-slate-400">
            {stats.current}
          </div>
        </div>
      </Reveal>

      <div className="timeline">
        {ordered.map((item, i) => (
          <WorkCard
            key={`${item.work}-${item.time}`}
            {...item}
            tone={tone}
            delay={Math.min(i, 4) * 60}
            lang={lang}
            ui={ui}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkContent;
