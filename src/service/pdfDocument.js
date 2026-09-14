import skillsData from "../assets/skills.json";
import {
  applyDynamicTokens,
  extractTechnologies,
  formatDuration,
  positionMonths,
  sortPositions,
  stripTechLine,
} from "./util";

/**
 * El CV imprimible se arma como un documento HTML independiente porque se
 * inyecta en un iframe propio: ahí no llegan ni Tailwind ni las fuentes de la
 * página, así que todo el estilo viaja en línea.
 */

const ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const esc = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ESCAPES[char]);

const multiline = (value = "") => esc(value).replace(/\n/g, "<br/>");

const C = {
  ink: "#111827",
  muted: "#4b5563",
  soft: "#6b7280",
  line: "#e5e7eb",
  accent: "#0369a1",
  accentSoft: "#e0f2fe",
};

const sectionTitle = (text) => `
  <h2 style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:.08em;
             color:${C.accent};border-bottom:1px solid ${C.line};padding-bottom:3px;">
    ${esc(text)}
  </h2>`;

const skillList = (skills) => `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px 14px;">
    ${skills
      .map(
        (skill) => `
      <div style="display:flex;align-items:center;gap:6px;font-size:8px;">
        <span style="flex:1;color:${C.muted};">${esc(skill.title)}</span>
        <span style="width:42px;height:4px;background:${C.line};border-radius:2px;overflow:hidden;">
          <span style="display:block;height:4px;width:${skill.val}%;background:${C.accent};"></span>
        </span>
      </div>`
      )
      .join("")}
  </div>`;

const positionBlock = (item, lang) => {
  const months = positionMonths(item.time);
  const tech = extractTechnologies(item.descrip, 10);

  return `
    <div style="margin-bottom:8px;page-break-inside:avoid;">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline;">
        <strong style="font-size:9.5px;color:${C.ink};">${esc(item.work)}</strong>
        <span style="font-size:7.5px;color:${C.soft};white-space:nowrap;">
          ${esc(item.time)}${months ? ` · ${esc(formatDuration(months, lang))}` : ""}
        </span>
      </div>
      <div style="font-size:8px;color:${C.accent};margin-bottom:2px;">${esc(item.emp)}</div>
      <div style="font-size:8px;color:${C.muted};line-height:1.35;">
        ${multiline(stripTechLine(item.descrip))}
      </div>
      ${
        (item.links || []).length
          ? `<div style="margin-top:3px;font-size:7px;color:${C.accent};">${item.links
              .map((l) => `${esc(l.label)}: ${esc(l.url)}`)
              .join("<br/>")}</div>`
          : ""
      }
      ${
        tech.length
          ? `<div style="margin-top:3px;">${tech
              .map(
                (t) =>
                  `<span style="display:inline-block;background:${C.accentSoft};color:${C.accent};
                    font-size:7px;padding:1px 5px;border-radius:3px;margin:1px 3px 0 0;">${esc(t)}</span>`
              )
              .join("")}</div>`
          : ""
      }
    </div>`;
};

export const printableFileName = (name) =>
  `CV_${name.replace(/\s+/g, "_")}_${new Date().toISOString().slice(0, 10)}`;

export const buildPrintableCv = (datalang, lang = "es") => {
  const { info, titles, ui } = datalang;

  const contact = info.aboutmeitems
    .map(
      (item) => `
      <div style="font-size:7.5px;margin-bottom:2px;">
        <strong style="color:${C.ink};">${esc(item.title)}:</strong>
        <span style="color:${C.muted};">${esc(applyDynamicTokens(item.val))}</span>
      </div>`
    )
    .join("");

  const links = info.social
    .map(
      (item) => `
      <div style="font-size:7px;color:${C.accent};word-break:break-all;margin-top:2px;">
        ${esc(item.name)}: ${esc(item.link)}
      </div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="${esc(lang)}">
<head>
<meta charset="utf-8">
<title>${esc(printableFileName(info.name))}</title>
<style>
  @page { size: A4; margin: 10mm; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 9px;
    line-height: 1.35;
    color: ${C.ink};
    background: #fff;
  }
  section { margin-bottom: 10px; page-break-inside: avoid; }
  h2 { page-break-after: avoid; }
</style>
</head>
<body>
  <header style="background:linear-gradient(135deg,#075985 0%,#0284c7 100%);color:#fff;
                 padding:12px 14px;border-radius:6px;margin-bottom:10px;">
    <h1 style="margin:0 0 2px;font-size:19px;letter-spacing:.3px;">${esc(info.name)}</h1>
    <div style="font-size:9px;opacity:.9;margin-bottom:4px;">${esc(info.role)}</div>
    <p style="margin:0;font-size:8.5px;opacity:.95;line-height:1.35;">
      ${esc(applyDynamicTokens(info.post))}
    </p>
  </header>

  <section style="display:grid;grid-template-columns:1fr 2fr;gap:12px;">
    <div style="background:#f8fafc;border:1px solid ${C.line};border-radius:6px;padding:8px;">
      ${sectionTitle(ui.contactTitle)}
      ${contact}
      <div style="margin-top:6px;padding-top:5px;border-top:1px solid ${C.line};">${links}</div>
    </div>
    <div>
      ${sectionTitle(titles.about)}
      <div style="font-size:8px;color:${C.muted};line-height:1.4;">
        ${multiline(applyDynamicTokens(info.aboutme))}
      </div>
    </div>
  </section>

  <section>
    ${sectionTitle(titles.skilleng)}
    ${skillList(skillsData.language_skills)}
  </section>

  <section>
    ${sectionTitle(titles.skilfra)}
    ${skillList(skillsData.lib_skills)}
  </section>

  <section>
    ${sectionTitle(titles.workt)}
    ${sortPositions(info.workitems).map((item) => positionBlock(item, lang)).join("")}
  </section>

  <section>
    ${sectionTitle(titles.edugt)}
    ${sortPositions(info.educationitems).map((item) => positionBlock(item, lang)).join("")}
  </section>
</body>
</html>`;
};
