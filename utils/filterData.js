export const filterByField = (data, field, value) => {
  return data.filter((obj) => {
    return obj[field].toLowerCase() === value.toLowerCase();
  });
};
