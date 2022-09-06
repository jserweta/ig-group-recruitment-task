export const prepareAccData = (data) => {
  return data.filter((item) => item.id !== undefined);
};
