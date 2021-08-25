const { authSecret } = require("../config/index");
const response = require("../responses/response");

async function check(request, reply) {
  let token = request.headers.authorization;
  if (!token) {
    return response.badRequest(
      "",
      "Authorization Error: Header missing",
      reply
    );
  } else if (token !== authSecret) {
    return response.badRequest(
      "",
      "Authorization Error: Incorrect Secret",
      reply
    );
  } else {
    return true;
  }
}

module.exports = {
  check,
};
