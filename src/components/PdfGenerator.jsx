import React, { useRef } from 'react';
import { getCurrentAge, getCurrentExperienceYears } from '../service/util';
import skillsData from '../assets/skills.json';

// Componente minimalista para PDF
const MinimalistCV = ({ datalang }) => {
  const { info, titles, skillLevels = {}, stats = {} } = datalang;

  // Procesar textos dinámicos
  const processedPost = info.post.replace('DYNAMIC_EXPERIENCE_YEARS', getCurrentExperienceYears());
  const processedAboutMe = info.aboutme.replace('DYNAMIC_EXPERIENCE_YEARS', getCurrentExperienceYears());

  return (
    <div className="pdf-cv bg-white text-gray-800" style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '15mm',
      fontFamily: 'Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '1.4'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '20px', borderBottom: '2px solid #2563eb', paddingBottom: '15px' }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '5px',
          margin: 0
        }}>
          {info.name}
        </h1>
        <p style={{
          fontSize: '12px',
          color: '#6b7280',
          margin: '5px 0',
          fontStyle: 'italic'
        }}>
          {processedPost}
        </p>
      </div>

      {/* Información de contacto y About Me */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        {/* Contacto */}
        <div>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>
            Información de Contacto
          </h2>
          {info.aboutmeitems?.map((item, i) => (
            <div key={i} style={{ marginBottom: '5px', fontSize: '10px' }}>
              <strong>{item.title}:</strong> {item.val === "DYNAMIC_AGE" ? getCurrentAge() : item.val}
            </div>
          ))}

          {/* Redes sociales */}
          <div style={{ marginTop: '10px' }}>
            <strong>Enlaces:</strong>
            {info.social?.map((item, i) => (
              <div key={i} style={{ fontSize: '10px', color: '#2563eb' }}>
                {item.name}: {item.link}
              </div>
            ))}
          </div>
        </div>

        {/* About Me */}
        <div>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>
            {titles.about}
          </h2>
          <p style={{ fontSize: '10px', lineHeight: '1.4', textAlign: 'justify' }}>
            {processedAboutMe.substring(0, 400)}...
          </p>
        </div>
      </div>

      {/* Experiencia Laboral */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '15px',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '5px'
        }}>
          {titles.workt}
        </h2>
        {info.workitems?.slice(0, 4).map((item, i) => (
          <div key={i} style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#374151', margin: 0 }}>
                {item.work}
              </h3>
              <span style={{ fontSize: '10px', color: '#6b7280', fontStyle: 'italic' }}>
                {item.time}
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#2563eb', margin: '2px 0' }}>{item.emp}</p>
            <p style={{ fontSize: '10px', lineHeight: '1.3', textAlign: 'justify' }}>
              {item.descrip?.substring(0, 200)}...
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        {/* Educación */}
        <div>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>
            {titles.edugt}
          </h2>
          {info.educationitems?.map((item, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: 'bold', color: '#374151' }}>{item.work}</h3>
              <p style={{ fontSize: '10px', color: '#2563eb' }}>{item.emp}</p>
              <p style={{ fontSize: '10px', color: '#6b7280' }}>{item.time}</p>
            </div>
          ))}
        </div>

        {/* Skills y Tecnologías */}
        <div>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>
            {titles.skilleng || 'Tecnologías'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
            {skillsData.language_skills?.slice(0, 8).map((skill, i) => (
              <span key={i} style={{
                backgroundColor: skill.val >= 80 ? '#dcfce7' : skill.val >= 60 ? '#dbeafe' : '#fef3c7',
                color: skill.val >= 80 ? '#166534' : skill.val >= 60 ? '#1e40af' : '#a16207',
                padding: '2px 6px',
                borderRadius: '3px',
                fontSize: '9px',
                fontWeight: '500'
              }}>
                {skill.title} ({skill.val}%)
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#374151', marginBottom: '5px' }}>
            {titles.skilfra || 'Frameworks & Tools'}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
            {skillsData.lib_skills?.slice(0, 6).map((skill, i) => (
              <span key={i} style={{
                backgroundColor: '#f0fdf4',
                color: '#15803d',
                padding: '2px 6px',
                borderRadius: '3px',
                fontSize: '9px',
                fontWeight: '500'
              }}>
                {skill.title}
              </span>
            ))}
          </div>

          <div style={{ marginTop: '10px', padding: '8px', backgroundColor: '#f8fafc', borderRadius: '4px' }}>
            <p style={{ fontSize: '10px', color: '#374151', margin: 0 }}>
              <strong>Experiencia:</strong> {getCurrentExperienceYears()} años desarrollando soluciones full-stack
            </p>
            <p style={{ fontSize: '9px', color: '#6b7280', margin: '2px 0 0 0' }}>
              Especializado en microservicios, cloud computing y arquitecturas escalables
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '15mm',
        left: '15mm',
        right: '15mm',
        textAlign: 'center',
        fontSize: '9px',
        color: '#6b7280',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '10px'
      }}>
        <p>CV generado automáticamente - {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

const PdfGenerator = ({ datalang }) => {
  const pdfRef = useRef();
  const isEnglish = datalang.locale === 'en-us';

    const generatePDF = async () => {
    try {
      // Crear una nueva ventana con el contenido del CV
      const printWindow = window.open('', '_blank', 'width=800,height=1000');
      const pdfContent = pdfRef.current.innerHTML;
      const fileName = `CV_${datalang.info.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}`;

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
                min-height: 297mm !important;
                padding: 15mm !important;
                box-sizing: border-box;
                background: white !important;
                color: #1f2937 !important;
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
                body { margin: 0 !important; }
                .pdf-cv {
                  width: 100% !important;
                  height: auto !important;
                  margin: 0 !important;
                  padding: 10mm !important;
                }
                .print-button { display: none !important; }
              }
            </style>
          </head>
          <body>
            <button class="print-button" onclick="window.print()">
              📄 ${isEnglish ? 'Print/Save as PDF' : 'Imprimir/Guardar PDF'}
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
      console.error('Error al generar PDF:', error);
      const message = isEnglish
        ? 'Error generating PDF. Please try again.'
        : 'Error al generar el PDF. Por favor, inténtalo de nuevo.';
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
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <div ref={pdfRef}>
          <MinimalistCV datalang={datalang} />
        </div>
      </div>
    </div>
  );
};

export default PdfGenerator;
