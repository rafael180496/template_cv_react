
export const mergeObj = (orig, ...inobj) => {
    inobj.forEach((item) => {
      Object.keys(item).forEach((key) => {
        const inval = item[key];
        const origval = orig[key];
        orig[key] =
          origval &&
          inval &&
          typeof origval === "object" &&
          typeof inval === "object"
            ? mergeObj(origval, inval)
            : inval;
      });
    });
    return orig;
  };

// Fecha de nacimiento: 18-04-1996
export const BIRTH_DATE = new Date('1996-04-18');

// Fecha de inicio de carrera profesional: Marzo 2017 - The Data Age
export const CAREER_START_DATE = new Date('2017-03-01');

// Calcula la edad actual basándose en la fecha de nacimiento
export const calculateAge = (birthDate = BIRTH_DATE) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Si no ha llegado el cumpleaños este año, resta 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// Calcula los años de experiencia profesional desde 2017
export const calculateYearsOfExperience = (startDate = CAREER_START_DATE) => {
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();

  // Si no ha llegado el mes/día de inicio este año, resta 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }

  return years;
};

// Obtiene la edad actual como string
export const getCurrentAge = () => calculateAge().toString();

// Obtiene los años de experiencia actuales
export const getCurrentExperienceYears = () => calculateYearsOfExperience();

