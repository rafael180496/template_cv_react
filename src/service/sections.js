/**
 * Secciones navegables del CV. Los `id` son fijos y en español a propósito:
 * si cambiaran con el idioma, un enlace compartido dejaría de funcionar al
 * abrirlo con la otra preferencia guardada.
 */
export const SECTIONS = [
  { id: "sobre-mi", key: "about" },
  { id: "habilidades", key: "skills" },
  { id: "experiencia", key: "experience" },
  { id: "educacion", key: "education" },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);
