const fastify = require("fastify")({
  logger: true,
  ajv: {
    removeAdditional: true,
  }
});
const { connectionString } = require("./config/index");
//bring in routes
const routes = require("./routes");

//db
const mongoose = require("mongoose");

//db connection
mongoose
  .connect(connectionString)
  .then(() => console.log("Database is connected !!"))
  .catch((err) => console.log(err));

//routes
fastify.get("/", async (request, reply) => {
  return {
    visiter: "Welcome",
  };
});

routes.forEach((route, index) => {
  fastify.route(route);
});

//starting server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running at ${address}`);
  } catch (error) { }
};
start();
