export function sendJSONResponse(res, statusCode, contentType, data) {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = statusCode;
  res.end(JSON.stringify(data));
}
