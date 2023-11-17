export const validateEmail = (value: string) => {
  if (/^[a-z]+[a-z0-9_-]+@[a-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value)) return true;
  return false;
};

export const validateCharacterLimit = (value: string, limit: number) => {
  if (value.length >= limit) return true;
  return false;
};
