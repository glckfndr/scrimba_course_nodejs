export const getDataByQueryParams = (
  destinations,
  { country, continent, is_open_to_public }
) => {
  // If no query params are provided, return all destinations
  if (!country && !continent && is_open_to_public === undefined) {
    return destinations;
  }
  console.log(
    is_open_to_public !== undefined ? is_open_to_public == "true" : true
  );
  let filteredData = destinations.filter(
    (d) =>
      (country ? d.country.toLowerCase() === country.toLowerCase() : true) &&
      (continent
        ? d.continent.toLowerCase() === continent.toLowerCase()
        : true) &&
      (is_open_to_public !== undefined
        ? d.is_open_to_public === JSON.parse(is_open_to_public)
        : true)
  );
  return filteredData;
};
