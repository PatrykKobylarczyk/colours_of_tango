const polishMonths = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

export const formatDate = (isoDate, lang) => {
  const dateObj = new Date(isoDate);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  if (lang === "EN") {
    return `${day} ${polishMonths[month]} ${year}`;
  }

  // EN: e.g. January 25, 2026
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
