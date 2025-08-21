
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

// Obtiene la edad actual como string
export const getCurrentAge = () => calculateAge().toString();

