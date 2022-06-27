export const getSessionStorage = () => {
  return Object.keys(sessionStorage);
};

export const checkSession = (key: string) => {
  return getSessionStorage().map((o) => o.includes(key))[0];
};
