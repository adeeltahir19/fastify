const baseUrl = "https://api.wistia.com/v1/medias.json?";

const getQueryString = (params) => {
  return Object.keys(params)
    .filter((key) =>
      Boolean(Array.isArray(params[key]) ? params[key].length : params[key])
    )
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};
module.exports = {
  getQueryString,
  baseUrl
};
