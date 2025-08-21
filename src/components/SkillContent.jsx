import React from "react";

const CardSkill = ({ title, val, delay, color }) => {
  const getColorClasses = () => {
    return color === "success" ? "bg-emerald-500" : "bg-primary-500";
  };

  const getBadgeColor = () => {
    if (val >= 90) return "bg-green-100 text-green-800";
    if (val >= 70) return "bg-blue-100 text-blue-800";
    if (val >= 50) return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
          {title}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor()}`}
        >
          {val}%
        </span>
      </div>
      <div className="progress">
        <div
          className={`progress-bar ${getColorClasses()} transition-all duration-1000 ease-out`}
          data-aos="fade-left"
          data-aos-delay={delay}
          data-aos-anchor=".skills-section"
          style={{
            width: `${val}%`,
          }}
          role="progressbar"
          aria-valuenow={val}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

const SkillContent = ({
  skills,
  title,
  color = "primary",
  skillLevels = {},
}) => {
  return (
    <div className="skills-section">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((item, i) => {
          return (
            <CardSkill
              key={i}
              delay={i * 30} // Más rápido: 50ms → 30ms
              title={item.title}
              val={item.val}
              color={color}
            />
          );
        })}
      </div>

      {/* Skills Summary */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-600">
              {skills.filter((s) => s.val >= 90).length}
            </div>
            <div className="text-sm text-gray-600">
              {skillLevels.expert || "Experto"}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {skills.filter((s) => s.val >= 70 && s.val < 90).length}
            </div>
            <div className="text-sm text-gray-600">
              {skillLevels.advanced || "Avanzado"}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {skills.filter((s) => s.val >= 50 && s.val < 70).length}
            </div>
            <div className="text-sm text-gray-600">
              {skillLevels.intermediate || "Intermedio"}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-600">
              {skills.filter((s) => s.val < 50).length}
            </div>
            <div className="text-sm text-gray-600">
              {skillLevels.basic || "Básico"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillContent;
