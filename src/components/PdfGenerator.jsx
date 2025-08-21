import React, { useRef } from "react";
import { getCurrentAge, getCurrentExperienceYears } from "../service/util";
import skillsData from "../assets/skills.json";

// Componente minimalista para PDF
const MinimalistCV = ({ datalang }) => {
  const { info, titles, skillLevels = {}, stats = {} } = datalang;

  // Procesar textos dinámicos
  const processedPost = info.post.replace(
    "DYNAMIC_EXPERIENCE_YEARS",
    getCurrentExperienceYears()
  );
  const processedAboutMe = info.aboutme.replace(
    "DYNAMIC_EXPERIENCE_YEARS",
    getCurrentExperienceYears()
  );

  return (
    <div
      className="pdf-cv bg-white text-gray-800"
      style={{
        width: "210mm",
        minHeight: "auto",
        padding: "12mm",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "10px",
        lineHeight: "1.3",
        color: "#1f2937",
        position: "relative",
      }}
    >
      {/* Header Mejorado */}
      <div
        style={{
          marginBottom: "25px",
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "8px",
                margin: 0,
                letterSpacing: "0.5px",
              }}
            >
              {info.name}
            </h1>
            <p
              style={{
                fontSize: "13px",
                margin: "5px 0 0 0",
                opacity: "0.95",
                lineHeight: "1.4",
              }}
            >
              {processedPost}
            </p>
          </div>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {info.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
        </div>
      </div>

      {/* Información de contacto y About Me Mejorado */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "25px",
          marginBottom: "25px",
        }}
      >
        {/* Contacto */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "18px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "15px",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "5px",
              margin: "0 0 15px 0",
            }}
          >
            📋 Información de Contacto
          </h2>
          {info.aboutmeitems?.map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "8px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <strong style={{ color: "#374151", minWidth: "70px" }}>
                {item.title}:
              </strong>
              <span style={{ marginLeft: "8px", color: "#6b7280" }}>
                {item.val === "DYNAMIC_AGE" ? getCurrentAge() : item.val}
              </span>
            </div>
          ))}

          {/* Redes sociales */}
          <div
            style={{
              marginTop: "15px",
              paddingTop: "10px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <strong style={{ color: "#374151", fontSize: "11px" }}>
              🔗 Enlaces Profesionales:
            </strong>
            {info.social?.map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: "9px",
                  color: "#2563eb",
                  marginTop: "5px",
                  wordBreak: "break-all",
                }}
              >
                <strong>{item.name}:</strong> {item.link}
              </div>
            ))}
          </div>
        </div>

        {/* About Me */}
        <div
          style={{
            backgroundColor: "#fefefe",
            padding: "18px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "15px",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "5px",
              margin: "0 0 15px 0",
            }}
          >
            👨‍💻 {titles.about}
          </h2>
          <p
            style={{
              fontSize: "10px",
              lineHeight: "1.5",
              textAlign: "justify",
              color: "#374151",
              margin: 0,
            }}
          >
            {processedAboutMe}
          </p>
        </div>
      </div>

      {/* Experiencia Laboral Completa */}
      <div style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1e40af",
            marginBottom: "20px",
            borderBottom: "3px solid #3b82f6",
            paddingBottom: "8px",
            margin: "0 0 20px 0",
            textAlign: "center",
          }}
        >
          💼 {titles.workt}
        </h2>

        {info.workitems?.map((item, i) => (
          <div
            key={i}
            style={{
              marginBottom: "20px",
              backgroundColor: i % 2 === 0 ? "#f8fafc" : "#ffffff",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "8px",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#1e40af",
                    margin: "0 0 3px 0",
                  }}
                >
                  {item.work}
                </h3>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#059669",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  {item.emp}
                </p>
              </div>
              <span
                style={{
                  fontSize: "9px",
                  color: "#6b7280",
                  fontStyle: "italic",
                  backgroundColor: "#e0f2fe",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  whiteSpace: "nowrap",
                  marginLeft: "10px",
                }}
              >
                📅 {item.time}
              </span>
            </div>

            <div
              style={{
                fontSize: "9px",
                lineHeight: "1.4",
                textAlign: "justify",
                color: "#374151",
                marginTop: "8px",
              }}
            >
              {item.descrip?.split("\n").map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  style={{
                    margin: "0 0 6px 0",
                    textIndent: paragraph.startsWith("•") ? "0" : "8px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Separador visual */}
            {i < info.workitems.length - 1 && (
              <div
                style={{
                  marginTop: "12px",
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, #cbd5e1, transparent)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Educación */}
      <div style={{ marginBottom: "25px" }}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1e40af",
            marginBottom: "15px",
            borderBottom: "3px solid #3b82f6",
            paddingBottom: "8px",
            margin: "0 0 15px 0",
            textAlign: "center",
          }}
        >
          🎓 {titles.edugt}
        </h2>
        {info.educationitems?.map((item, i) => (
          <div
            key={i}
            style={{
              marginBottom: "15px",
              backgroundColor: "#fefefe",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#1e40af",
                margin: "0 0 5px 0",
              }}
            >
              {item.work}
            </h3>
            <p
              style={{
                fontSize: "11px",
                color: "#059669",
                margin: "0 0 5px 0",
                fontWeight: "600",
              }}
            >
              {item.emp}
            </p>
            <p
              style={{
                fontSize: "10px",
                color: "#6b7280",
                margin: "0 0 8px 0",
                fontStyle: "italic",
              }}
            >
              📅 {item.time}
            </p>
            {item.descrip && (
              <p
                style={{
                  fontSize: "9px",
                  lineHeight: "1.4",
                  textAlign: "justify",
                  color: "#374151",
                  margin: "0",
                }}
              >
                {item.descrip}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Skills y Tecnologías Completas */}
      <div style={{ marginBottom: "25px" }}>
        {/* Lenguajes de Programación */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "15px",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "5px",
              margin: "0 0 15px 0",
            }}
          >
            💻 {titles.skilleng || "Lenguajes de Programación"}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: "8px",
            }}
          >
            {skillsData.language_skills?.map((skill, i) => (
              <div
                key={i}
                style={{
                  backgroundColor:
                    skill.val >= 85
                      ? "#dcfce7"
                      : skill.val >= 70
                      ? "#dbeafe"
                      : skill.val >= 50
                      ? "#fef3c7"
                      : "#fef2f2",
                  color:
                    skill.val >= 85
                      ? "#166534"
                      : skill.val >= 70
                      ? "#1e40af"
                      : skill.val >= 50
                      ? "#a16207"
                      : "#991b1b",
                  padding: "6px 8px",
                  borderRadius: "6px",
                  fontSize: "9px",
                  fontWeight: "600",
                  textAlign: "center",
                  border: "1px solid",
                  borderColor:
                    skill.val >= 85
                      ? "#bbf7d0"
                      : skill.val >= 70
                      ? "#bfdbfe"
                      : skill.val >= 50
                      ? "#fde68a"
                      : "#fecaca",
                }}
              >
                <div>{skill.title}</div>
                <div
                  style={{ fontSize: "8px", marginTop: "2px", opacity: "0.8" }}
                >
                  {skill.val}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks y Herramientas */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "15px",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "5px",
              margin: "0 0 15px 0",
            }}
          >
            🛠️ {titles.skilfra || "Frameworks, Herramientas y Plataformas"}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
              gap: "6px",
            }}
          >
            {skillsData.lib_skills?.map((skill, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f0fdf4",
                  color: "#15803d",
                  padding: "5px 8px",
                  borderRadius: "6px",
                  fontSize: "9px",
                  fontWeight: "600",
                  textAlign: "center",
                  border: "1px solid #bbf7d0",
                }}
              >
                {skill.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PdfGenerator = ({ datalang }) => {
  const pdfRef = useRef();
  const isEnglish = datalang.locale === "en-us";

  const generatePDF = async () => {
    try {
      // Crear una nueva ventana con el contenido del CV
      const printWindow = window.open("", "_blank", "width=800,height=1000");
      const pdfContent = pdfRef.current.innerHTML;
      const fileName = `CV_${datalang.info.name.replace(/\s+/g, "_")}_${
        new Date().toISOString().split("T")[0]
      }`;

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${fileName}</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              @page {
                size: A4;
                margin: 0;
              }
              * {
                box-sizing: border-box;
              }
              body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                color-adjust: exact;
                background: white;
              }
              .pdf-cv {
                width: 210mm !important;
                min-height: auto !important;
                padding: 12mm !important;
                box-sizing: border-box;
                background: white !important;
                color: #1f2937 !important;
                font-size: 10px !important;
                line-height: 1.3 !important;
              }
              .no-print {
                display: none !important;
              }
              .print-button {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                padding: 10px 20px;
                background: #2563eb;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 14px;
              }
              .print-button:hover {
                background: #1d4ed8;
              }
                            @media print {
                @page {
                  size: A4;
                  margin: 5mm;
                }
                body {
                  margin: 0 !important;
                  font-size: 9px !important;
                }
                .pdf-cv {
                  width: 100% !important;
                  height: auto !important;
                  margin: 0 !important;
                  padding: 8mm !important;
                  font-size: 9px !important;
                  line-height: 1.2 !important;
                }
                .print-button { display: none !important; }
                * {
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                  color-adjust: exact !important;
                }
              }
            </style>
          </head>
          <body>
            <button class="print-button" onclick="window.print()">
              📄 ${isEnglish ? "Print/Save as PDF" : "Imprimir/Guardar PDF"}
            </button>
            ${pdfContent}
            <script>
              // Auto-focus para mejor UX
              window.focus();

              // Función para imprimir automáticamente después de cargar
              window.addEventListener('load', function() {
                setTimeout(() => {
                  // Opcional: auto-print después de 1 segundo
                  // window.print();
                }, 1000);
              });

              // Detectar Ctrl+P o Cmd+P
              document.addEventListener('keydown', function(e) {
                if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                  e.preventDefault();
                  window.print();
                }
              });
            </script>
          </body>
        </html>
      `);

      printWindow.document.close();
    } catch (error) {
      console.error("Error al generar PDF:", error);
      const message = isEnglish
        ? "Error generating PDF. Please try again."
        : "Error al generar el PDF. Por favor, inténtalo de nuevo.";
      alert(message);
    }
  };

  return (
    <div>
      {/* Botón de descarga */}
      <button
        onClick={generatePDF}
        className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        data-aos="zoom-in"
        data-aos-delay="100"
        title={isEnglish ? "Download PDF Resume" : "Descargar CV PDF"}
      >
        <i className="fas fa-download text-sm"></i>
        <span>{isEnglish ? "Download PDF" : "Descargar PDF"}</span>
      </button>

      {/* Contenido oculto para generar PDF */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <div ref={pdfRef}>
          <MinimalistCV datalang={datalang} />
        </div>
      </div>
    </div>
  );
};

export default PdfGenerator;
