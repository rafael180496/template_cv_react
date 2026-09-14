// ---------------------------------------------------------------------------
// Datos base del CV. Todo lo que dependa del paso del tiempo (edad, años de
// experiencia, duración de cada puesto) se calcula aquí a partir de estas dos
// fechas: escribirlo a mano en los textos obliga a editarlos cada año.
// ---------------------------------------------------------------------------

/** Fecha de nacimiento: 18-04-1996. */
export const BIRTH_DATE = new Date(1996, 3, 18);

/** Inicio de la carrera profesional: marzo 2017, The Data Age. */
export const CAREER_START_DATE = new Date(2017, 2, 1);

/** Meses completos entre dos fechas. */
const monthsBetween = (from, to) => {
  let months = (to.getFullYear() - from.getFullYear()) * 12;
  months += to.getMonth() - from.getMonth();
  if (to.getDate() < from.getDate()) months -= 1;
  return Math.max(0, months);
};

export const calculateAge = (birthDate = BIRTH_DATE) =>
  Math.floor(monthsBetween(birthDate, new Date()) / 12);

export const calculateYearsOfExperience = (startDate = CAREER_START_DATE) =>
  Math.floor(monthsBetween(startDate, new Date()) / 12);

export const getCurrentAge = () => calculateAge().toString();

export const getCurrentExperienceYears = () => calculateYearsOfExperience();

// ---------------------------------------------------------------------------
// Textos con marcadores dinámicos
// ---------------------------------------------------------------------------

const TOKENS = {
  DYNAMIC_AGE: () => getCurrentAge(),
  DYNAMIC_EXPERIENCE_YEARS: () => String(getCurrentExperienceYears()),
};

/**
 * Sustituye los marcadores de los archivos de idioma por su valor calculado.
 * Reemplaza TODAS las apariciones: `String.replace` con un string sólo cambia
 * la primera, y varios textos usan el mismo marcador dos veces.
 */
export const applyDynamicTokens = (text) => {
  if (typeof text !== "string") return text;
  return Object.entries(TOKENS).reduce(
    (acc, [token, resolve]) => acc.split(token).join(resolve()),
    text
  );
};

// ---------------------------------------------------------------------------
// Rangos de fechas de los puestos ("Marzo,2021 - Presente")
// ---------------------------------------------------------------------------

const MONTHS = {
  enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
  julio: 6, agosto: 7, septiembre: 8, setiembre: 8, octubre: 9,
  noviembre: 10, diciembre: 11,
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

const PRESENT_RE = /presente|present|actual/i;

/** Un puesto sigue vigente si su rango termina en "Presente" / "Present". */
export const isCurrentPosition = (time = "") => PRESENT_RE.test(time);

/** Convierte "Marzo,2021" o "March 2021" en un Date; null si no se reconoce. */
const parseMonthYear = (chunk) => {
  const year = chunk.match(/\d{4}/);
  if (!year) return null;
  const monthName = chunk
    .toLowerCase()
    .replace(/[^a-záéíóúü]/g, " ")
    .trim()
    .split(/\s+/)
    .find((word) => word in MONTHS);
  return new Date(Number(year[0]), monthName ? MONTHS[monthName] : 0, 1);
};

/**
 * Duración de un puesto en meses. Un rango abierto ("- Presente") se mide
 * contra hoy: dejarlo en cero haría que el puesto más largo del CV —el actual—
 * fuera justamente el que no cuenta.
 */
export const positionMonths = (time = "") => {
  const [rawStart, rawEnd] = time.split(/\s+-\s+|–|—/);
  const start = parseMonthYear(rawStart || "");
  if (!start) return 0;
  const end = isCurrentPosition(time)
    ? new Date()
    : parseMonthYear(rawEnd || rawStart || "");
  if (!end) return 0;
  return monthsBetween(start, end);
};

/**
 * Trayectoria que cubre una lista de puestos: del inicio más antiguo hasta el
 * cierre más reciente, o hasta hoy si alguno sigue vigente.
 *
 * Es lo que hay que mostrar como "experiencia total". La duración del puesto
 * **más largo** —que es lo que se mostraba antes— da un número mucho menor y
 * se lee como si fuera la carrera entera: con el trabajo más antiguo en marzo
 * de 2017, la tarjeta decía 5 años en lugar de 9.
 */
export const totalSpanMonths = (items = []) => {
  const starts = [];
  const ends = [];
  let open = false;

  for (const item of items) {
    const [rawStart, rawEnd] = (item.time || "").split(/\s+-\s+|–|—/);
    const start = parseMonthYear(rawStart || "");
    if (!start) continue;
    starts.push(start.getTime());

    if (isCurrentPosition(item.time)) {
      open = true;
      continue;
    }
    const end = parseMonthYear(rawEnd || rawStart || "");
    if (end) ends.push(end.getTime());
  }

  if (!starts.length) return 0;
  const from = new Date(Math.min(...starts));
  const to = open ? new Date() : new Date(Math.max(...ends, ...starts));
  return monthsBetween(from, to);
};

/** Instante de inicio de un puesto, para ordenar el historial. */
export const positionStart = (time = "") => {
  const start = parseMonthYear(time.split(/\s+-\s+|–|—/)[0] || "");
  return start ? start.getTime() : 0;
};

/**
 * Historial ordenado: primero lo vigente, después lo más reciente. El orden
 * del JSON es el de captura y deja puestos terminados por encima de los
 * actuales, que es lo primero que mira quien lee un CV.
 */
export const sortPositions = (items = []) =>
  [...items].sort((a, b) => {
    const current = Number(isCurrentPosition(b.time)) - Number(isCurrentPosition(a.time));
    if (current !== 0) return current;
    return positionStart(b.time) - positionStart(a.time);
  });

/** Etiqueta corta de duración: "4 años", "8 meses". */
export const formatDuration = (months, locale = "es") => {
  const en = locale.startsWith("en");
  if (months < 12) {
    const n = Math.max(1, months);
    return en ? `${n} mo${n > 1 ? "s" : ""}` : `${n} ${n > 1 ? "meses" : "mes"}`;
  }
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const y = en
    ? `${years} yr${years > 1 ? "s" : ""}`
    : `${years} ${years > 1 ? "años" : "año"}`;
  if (rest === 0) return y;
  return en ? `${y} ${rest} mo` : `${y} ${rest} m`;
};

// ---------------------------------------------------------------------------
// Etiquetas de tecnología
// ---------------------------------------------------------------------------

const TECH_LINE_RE = /^(?:tecnolog[ií]as|technologies)\s*:\s*(.+)$/im;

const TECH_KEYWORDS =
  /Node\.js|NestJS|React Native|React\.js|React|Vue\.js|TypeScript|JavaScript|Golang|Go\b|Python|Java\b|Spring Boot|Ruby on Rails|Flutter|Dart|Cobol|SQLite|SQL|AWS Lambda|AWS|Azure DevOps|Docker|Kubernetes|DynamoDB|MongoDB|GraphQL|WebSockets?/gi;

/**
 * Tecnologías de un puesto. Se prefiere la línea explícita "Tecnologías: ..."
 * porque es la que escribió el autor; el barrido por palabras clave es el
 * respaldo para las descripciones que no la traen.
 */
export const extractTechnologies = (descrip = "", max = 8) => {
  const declared = descrip.match(TECH_LINE_RE);
  const raw = declared
    ? declared[1].split(/,|•/)
    : descrip.match(TECH_KEYWORDS) || [];

  const seen = new Set();
  const tags = [];
  for (const item of raw) {
    const tag = item.replace(/\.$/, "").trim();
    if (!tag) continue;
    const key = tag.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    tags.push(tag);
    if (tags.length === max) break;
  }
  return tags;
};

/** Quita la línea "Tecnologías: ..." del cuerpo: se muestra como chips. */
export const stripTechLine = (descrip = "") =>
  descrip.replace(TECH_LINE_RE, "").trimEnd();

/** Iniciales para el monograma de la portada y la cabecera. */
export const getInitials = (name = "") =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
