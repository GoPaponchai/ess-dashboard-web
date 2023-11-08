import { DateTime } from "luxon";

const mappingYear = () => {
  const date = new Date();
  const nowYear = DateTime.local(date).year;
  return [nowYear, nowYear - 1];
};

export { mappingYear };
