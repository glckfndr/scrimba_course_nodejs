import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";
import { filterByField } from "./utils/filterData.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();

  if (req.url === "/api" && req.method === "GET") {
    sendJSONResponse(res, 200, destinations);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop().toLowerCase();
    const filteredData = filterByField(destinations, "continent", continent);

    if (filteredData.length != 0) {
      sendJSONResponse(res, 200, filteredData);
    } else {
      sendJSONResponse(res, 200, { countries: [] });
    }
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = filterByField(destinations, "country", country);
    sendJSONResponse(res, 200, filteredData);
  } else {
    sendJSONResponse(res, 404, {
      error: "not found",
      message: "The requested route does not exist",
    });
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
