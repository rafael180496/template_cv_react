import React from "react";

const WorkCard = ({ work, emp, time, descrip, color, delay }) => {
  const getColorClasses = () => {
    return color === "success"
      ? "timeline-card success border-l-emerald-500"
      : "timeline-card border-l-primary-500";
  };

  const getIconColor = () => {
    return color === "success"
      ? "text-emerald-600 bg-emerald-50"
      : "text-primary-600 bg-primary-50";
  };

  const getIcon = () => {
    return color === "success" ? "fas fa-graduation-cap" : "fas fa-briefcase";
  };

  return (
    <div
      className={`${getColorClasses()} group`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="timeline-card-body">
        <div className="card bg-white hover:shadow-lg transition-all duration-300 group-hover:scale-105">
          <div className="card-body">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-lg ${getIconColor()} flex items-center justify-center flex-shrink-0`}
                >
                  <i className={`${getIcon()} text-sm`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {work}
                  </h3>
                  <p className="text-primary-600 font-medium text-sm">{emp}</p>
                </div>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                {time}
              </span>
            </div>

            <div className="max-w-none">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line m-0 text-sm">
                {descrip}
              </p>
            </div>

            {/* Tags for technologies (if description contains tech keywords) */}
            {descrip && (
              <div className="flex flex-wrap gap-2 mt-4">
                {descrip
                  .match(
                    /Node\.js|React|Vue\.js|TypeScript|JavaScript|Golang|Python|Java|AWS|Docker|Kubernetes/gi
                  )
                  ?.slice(0, 6)
                  .map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkContent = ({ works, title, color = "primary", stats = {} }) => {
  return (
    <div className="work-experience-section">
      <h2 className="section-title">{title}</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-primary-50 rounded-lg">
          <div className="text-2xl font-bold text-primary-600">
            {works.length}
          </div>
          <div className="text-sm text-gray-600">
            {color === "success"
              ? stats.titles || "Títulos"
              : stats.positions || "Posiciones"}
          </div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">
            {Math.max(
              ...works.map((w) => {
                const years = w.time?.match(/(\d{4})/g);
                return years
                  ? parseInt(years[years.length - 1]) - parseInt(years[0])
                  : 0;
              })
            )}
          </div>
          <div className="text-sm text-gray-600">
            {stats.yearsMax || "Años máx."}
          </div>
        </div>
        <div className="text-center p-4 bg-emerald-50 rounded-lg">
          <div className="text-2xl font-bold text-emerald-600">
            {
              works.filter(
                (w) =>
                  w.time?.includes("Present") || w.time?.includes("Presente")
              ).length
            }
          </div>
          <div className="text-sm text-gray-600">
            {stats.current || "Actuales"}
          </div>
        </div>
      </div>

      <div className="timeline relative">
        {works.map((item, i) => {
          return <WorkCard {...item} color={color} key={i} delay={i * 50} />; // Más rápido: 100ms → 50ms
        })}
      </div>
    </div>
  );
};

export default WorkContent;
