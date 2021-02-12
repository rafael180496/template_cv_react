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
