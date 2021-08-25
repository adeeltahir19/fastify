const { getQueryString, baseUrl } = require("../helpers/request");
const { wistiaApiKey } = require("../config/index");
const axios = require("axios");

const getVideos = async (req, reply) => {
  try {
    const params = req.query;
    const payload = getQueryString({ access_token: wistiaApiKey, ...params });
    let response = await axios({
      method: "get",
      url: baseUrl + payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getVideos,
};
