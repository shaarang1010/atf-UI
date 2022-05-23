import therapyList from "../assets/lists.json";
import get from "lodash/get";

export const searchByKey = (key, searchTerm) => {
  const element = get(therapyList, key);
  return element.find((el) => el.value === searchTerm);
};
