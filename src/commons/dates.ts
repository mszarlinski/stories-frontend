const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortDate = (s?: string) => {
  if (s) {
    const d = new Date(s);
    return `${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`;
  }
};
