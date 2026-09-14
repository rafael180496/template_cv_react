import { useReveal } from "../hooks/useReveal";
import Reveal from "./Reveal";

const levelOf = (val) => {
  if (val >= 90) return "expert";
  if (val >= 70) return "advanced";
  if (val >= 50) return "intermediate";
  return "basic";
};

const LEVEL_STYLES = {
  expert: {
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
    bar: "bg-emerald-500 dark:bg-emerald-400",
    stat: "text-emerald-600 dark:text-emerald-400",
  },
  advanced: {
    badge: "bg-primary-100 text-primary-800 dark:bg-primary-500/15 dark:text-primary-300",
    bar: "bg-primary-500 dark:bg-primary-400",
    stat: "text-primary-600 dark:text-primary-400",
  },
  intermediate: {
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
    bar: "bg-amber-500 dark:bg-amber-400",
    stat: "text-amber-600 dark:text-amber-400",
  },
  basic: {
    badge: "bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300",
    bar: "bg-gray-400 dark:bg-slate-500",
    stat: "text-gray-600 dark:text-slate-400",
  },
};

const CardSkill = ({ title, val, delay, skillLevels }) => {
  const [ref, visible] = useReveal();
  const level = levelOf(val);
  const styles = LEVEL_STYLES[level];
  const label = skillLevels[level] ?? level;

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="truncate font-medium text-gray-700 transition-colors group-hover:text-gray-900 dark:text-slate-300 dark:group-hover:text-white">
          {title}
        </span>
        <span
          className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${styles.badge}`}
        >
          {label}
        </span>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label={title}
        aria-valuenow={val}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/*
          La barra parte de cero y crece al entrar en pantalla: dibujarla ya
          completa desperdicia el único momento en que el dato se lee solo.
        */}
        <div
          className={`progress-bar ${styles.bar}`}
          style={{
            width: visible ? `${val}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

const SkillContent = ({ skills, title, skillLevels = {} }) => {
  const summary = ["expert", "advanced", "intermediate", "basic"].map(
    (level) => ({
      level,
      label: skillLevels[level] ?? level,
      count: skills.filter((skill) => levelOf(skill.val) === level).length,
    })
  );

  return (
    <div>
      <Reveal as="h2" className="section-title">
        {title}
      </Reveal>

      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((item, i) => (
          <CardSkill
            key={item.title}
            title={item.title}
            val={item.val}
            delay={(i % 3) * 80}
            skillLevels={skillLevels}
          />
        ))}
      </div>

      <Reveal className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {summary.map(({ level, label, count }) => (
          <div key={level} className="stat-tile">
            <div className={`text-2xl font-bold ${LEVEL_STYLES[level].stat}`}>
              {count}
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-400">
              {label}
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
};

export default SkillContent;
