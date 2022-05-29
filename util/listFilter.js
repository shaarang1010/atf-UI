import therapyList from "../assets/lists.json";
import get from "lodash/get";

export const searchByKey = (key, searchTerm) => {
  const element = get(therapyList, key);
  return element.find((el) => el.value.toLowerCase() === searchTerm);
};

export const replaceNewLineChar = (el) => {
  return el.replace(/(\r\n|\n|\r)/gm, ",").toLowerCase();
};
