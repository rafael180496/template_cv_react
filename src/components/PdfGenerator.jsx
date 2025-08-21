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
        padding: "8mm",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "9px",
        lineHeight: "1.2",
        color: "#1f2937",
        position: "relative",
        maxWidth: "210mm",
        overflow: "visible"
      }}
    >
      {/* Header Optimizado */}
      <div
        style={{
          marginBottom: "15px",
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          color: "white",
          padding: "12px 16px",
          borderRadius: "6px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px"
          }}
        >
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "0 0 4px 0",
                letterSpacing: "0.3px",
                lineHeight: "1.1"
              }}
            >
              {info.name}
            </h1>
            <p
              style={{
                fontSize: "10px",
                margin: "0",
                opacity: "0.95",
                lineHeight: "1.3",
              }}
            >
              {processedPost}
            </p>
          </div>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "bold",
              flexShrink: 0
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

      {/* Información de contacto y About Me Optimizado */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "12px",
          marginBottom: "15px",
        }}
      >
        {/* Contacto */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "8px",
              borderBottom: "1px solid #3b82f6",
              paddingBottom: "3px",
              margin: "0 0 8px 0",
            }}
          >
            📋 Contacto
          </h2>
          {info.aboutmeitems?.map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "4px",
                fontSize: "8px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <strong style={{ color: "#374151", minWidth: "45px", fontSize: "7px" }}>
                {item.title}:
              </strong>
              <span style={{ marginLeft: "4px", color: "#6b7280", fontSize: "7px", lineHeight: "1.2" }}>
                {item.val === "DYNAMIC_AGE" ? getCurrentAge() : item.val}
              </span>
            </div>
          ))}

          {/* Redes sociales */}
          <div
            style={{
              marginTop: "8px",
              paddingTop: "6px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <strong style={{ color: "#374151", fontSize: "8px" }}>
              🔗 Enlaces:
            </strong>
            {info.social?.map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: "7px",
                  color: "#2563eb",
                  marginTop: "3px",
                  wordBreak: "break-all",
                  lineHeight: "1.1"
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
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "8px",
              borderBottom: "1px solid #3b82f6",
              paddingBottom: "3px",
              margin: "0 0 8px 0",
            }}
          >
            👨‍💻 {titles.about}
          </h2>
          <p
            style={{
              fontSize: "8px",
              lineHeight: "1.3",
              textAlign: "justify",
              color: "#374151",
              margin: 0,
            }}
          >
            {processedAboutMe}
          </p>
        </div>
      </div>

      {/* Experiencia Laboral Optimizada */}
      <div style={{ marginBottom: "15px" }}>
        <h2
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#1e40af",
            marginBottom: "10px",
            borderBottom: "2px solid #3b82f6",
            paddingBottom: "4px",
            margin: "0 0 10px 0",
            textAlign: "center",
          }}
        >
          💼 {titles.workt}
        </h2>

        {info.workitems?.map((item, i) => (
          <div
            key={i}
            style={{
              marginBottom: "8px",
              backgroundColor: i % 2 === 0 ? "#f8fafc" : "#ffffff",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #e2e8f0",
              pageBreakInside: "avoid"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "4px",
                gap: "8px"
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    color: "#1e40af",
                    margin: "0 0 2px 0",
                    lineHeight: "1.2"
                  }}
                >
                  {item.work}
                </h3>
                <p
                  style={{
                    fontSize: "8px",
                    color: "#059669",
                    margin: "0",
                    fontWeight: "600",
                    lineHeight: "1.2"
                  }}
                >
                  {item.emp}
                </p>
              </div>
              <span
                style={{
                  fontSize: "7px",
                  color: "#6b7280",
                  fontStyle: "italic",
                  backgroundColor: "#e0f2fe",
                  padding: "2px 6px",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                  flexShrink: 0
                }}
              >
                📅 {item.time}
              </span>
            </div>

            <div
              style={{
                fontSize: "7px",
                lineHeight: "1.3",
                textAlign: "justify",
                color: "#374151",
                marginTop: "4px",
              }}
            >
              {item.descrip?.split("\n").map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  style={{
                    margin: "0 0 3px 0",
                    textIndent: paragraph.startsWith("•") ? "0" : "4px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Educación */}
      <div style={{ marginBottom: "12px" }}>
        <h2
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#1e40af",
            marginBottom: "8px",
            borderBottom: "2px solid #3b82f6",
            paddingBottom: "4px",
            margin: "0 0 8px 0",
            textAlign: "center",
          }}
        >
          🎓 {titles.edugt}
        </h2>
        {info.educationitems?.map((item, i) => (
          <div
            key={i}
            style={{
              marginBottom: "8px",
              backgroundColor: "#fefefe",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #e2e8f0",
              pageBreakInside: "avoid"
            }}
          >
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#1e40af",
                margin: "0 0 2px 0",
                lineHeight: "1.2"
              }}
            >
              {item.work}
            </h3>
            <p
              style={{
                fontSize: "8px",
                color: "#059669",
                margin: "0 0 2px 0",
                fontWeight: "600",
                lineHeight: "1.2"
              }}
            >
              {item.emp}
            </p>
            <p
              style={{
                fontSize: "7px",
                color: "#6b7280",
                margin: "0 0 4px 0",
                fontStyle: "italic",
              }}
            >
              📅 {item.time}
            </p>
            {item.descrip && (
              <p
                style={{
                  fontSize: "7px",
                  lineHeight: "1.3",
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

      {/* Skills y Tecnologías Optimizadas */}
      <div style={{ marginBottom: "12px" }}>
        {/* Lenguajes de Programación */}
        <div style={{ marginBottom: "10px" }}>
          <h2
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "6px",
              borderBottom: "1px solid #3b82f6",
              paddingBottom: "2px",
              margin: "0 0 6px 0",
            }}
          >
            💻 {titles.skilleng || "Lenguajes de Programación"}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
              gap: "3px",
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
                  padding: "3px 4px",
                  borderRadius: "3px",
                  fontSize: "7px",
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
                  lineHeight: "1.1"
                }}
              >
                <div>{skill.title}</div>
                <div
                  style={{ fontSize: "6px", marginTop: "1px", opacity: "0.8" }}
                >
                  {skill.val}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks y Herramientas */}
        <div style={{ marginBottom: "10px" }}>
          <h2
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "6px",
              borderBottom: "1px solid #3b82f6",
              paddingBottom: "2px",
              margin: "0 0 6px 0",
            }}
          >
            🛠️ {titles.skilfra || "Frameworks y Herramientas"}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
              gap: "3px",
            }}
          >
            {skillsData.lib_skills?.map((skill, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f0fdf4",
                  color: "#15803d",
                  padding: "3px 4px",
                  borderRadius: "3px",
                  fontSize: "7px",
                  fontWeight: "600",
                  textAlign: "center",
                  border: "1px solid #bbf7d0",
                  lineHeight: "1.1"
                }}
              >
                {skill.title}
              </div>
            ))}
          </div>
        </div>

        {/* Resumen Compacto */}
        <div
          style={{
            marginTop: "10px",
            padding: "6px",
            backgroundColor: "#f0f9ff",
            borderRadius: "4px",
            border: "1px solid #0ea5e9",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "8px",
              color: "#0369a1",
              margin: "0 0 2px 0",
              fontWeight: "600",
            }}
          >
            <strong>{getCurrentExperienceYears()} años</strong> desarrollando soluciones full-stack
          </p>
          <p
            style={{
              fontSize: "7px",
              color: "#0c4a6e",
              margin: "0",
              lineHeight: "1.2",
            }}
          >
            Especializado en microservicios, cloud (AWS), Flutter y arquitecturas escalables
          </p>
        </div>
      </div>

      {/* Footer Compacto */}
      <div
        style={{
          marginTop: "15px",
          padding: "6px 8px",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          borderRadius: "4px",
          border: "1px solid #cbd5e1",
          textAlign: "center",
          pageBreakInside: "avoid"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          <span style={{ fontSize: "6px", color: "#64748b" }}>
            📄 CV generado automáticamente
          </span>
          <span
            style={{
              fontSize: "8px",
              fontWeight: "bold",
              color: "#1e40af",
            }}
          >
            {info.name}
          </span>
          <span style={{ fontSize: "6px", color: "#64748b" }}>
            📅{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <div
          style={{
            marginTop: "3px",
            fontSize: "5px",
            color: "#94a3b8",
            fontStyle: "italic",
          }}
        >
          React + Vite + Tailwind CSS • Full Stack Developer
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
                padding: 8mm !important;
                box-sizing: border-box;
                background: white !important;
                color: #1f2937 !important;
                font-size: 9px !important;
                line-height: 1.2 !important;
                max-width: 100% !important;
                overflow: visible !important;
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
                  margin: 3mm;
                }
                body {
                  margin: 0 !important;
                  font-size: 8px !important;
                  line-height: 1.1 !important;
                }
                .pdf-cv {
                  width: 100% !important;
                  height: auto !important;
                  margin: 0 !important;
                  padding: 5mm !important;
                  font-size: 8px !important;
                  line-height: 1.1 !important;
                  max-width: none !important;
                  overflow: visible !important;
                }
                .print-button { display: none !important; }
                * {
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                  color-adjust: exact !important;
                }
                h1, h2, h3 {
                  page-break-after: avoid !important;
                }
                div {
                  page-break-inside: avoid !important;
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
