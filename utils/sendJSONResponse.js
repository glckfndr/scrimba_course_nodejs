export function sendJSONResponse(res, statusCode, data) {
  res.setHeader("Content-Type", "application/json");
  // Allow CORS for all origins (you can restrict this in production)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.statusCode = statusCode;
  res.end(JSON.stringify(data));
}
