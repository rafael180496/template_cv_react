import { useCallback, useState } from "react";
import { useLang } from "../provider/langContext";
import { buildPrintableCv } from "../service/pdfDocument";

/**
 * Abre el diálogo de impresión del navegador con una versión A4 del CV.
 *
 * Se usa un iframe oculto y no `window.open`: una ventana nueva la bloquean
 * los navegadores por defecto cuando no hay interacción directa, y el usuario
 * no ve ningún error — el botón simplemente parece no hacer nada.
 */
const PdfGenerator = ({ datalang }) => {
  const { lang } = useLang();
  const [error, setError] = useState(false);
  const { ui } = datalang;

  const generate = useCallback(() => {
    setError(false);
    try {
      const frame = document.createElement("iframe");
      frame.setAttribute("aria-hidden", "true");
      frame.setAttribute("title", ui.downloadPdfTitle);
      frame.style.cssText =
        "position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;";
      document.body.appendChild(frame);

      const remove = () => {
        if (frame.parentNode) frame.parentNode.removeChild(frame);
      };

      frame.onload = () => {
        const win = frame.contentWindow;
        // Quitar el iframe apenas se llama a print() cancela el trabajo en
        // algunos navegadores: se espera al evento y, si nunca llega, al plazo.
        win.onafterprint = remove;
        setTimeout(remove, 60000);
        win.focus();
        win.print();
      };

      const doc = frame.contentWindow.document;
      doc.open();
      doc.write(buildPrintableCv(datalang, lang));
      doc.close();
    } catch {
      setError(true);
    }
  }, [datalang, lang, ui.downloadPdfTitle]);

  return (
    <div className="flex flex-col items-center gap-1 lg:items-start">
      <button
        type="button"
        onClick={generate}
        className="btn bg-white px-6 py-3 font-semibold text-primary-700 shadow-lg transition-colors hover:bg-primary-50"
        title={ui.downloadPdfTitle}
      >
        <i className="fas fa-file-arrow-down" aria-hidden="true"></i>
        {ui.downloadPdf}
      </button>
      {error && (
        <span role="alert" className="text-xs text-amber-200">
          {ui.printHint}: Ctrl / ⌘ + P
        </span>
      )}
    </div>
  );
};

export default PdfGenerator;
