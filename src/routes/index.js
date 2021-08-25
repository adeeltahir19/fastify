const eventController = require("../controllers/eventController");
const wistiaController = require("../controllers/wistiaController");
let middleware = require("../middlewares/auth");

const eventBodyJsonSchema = {
  body: {
    type: "object",
    additionalProperties: false,
    required: ["name", "description", "startTime"],
    properties: {
      name: { type: "string" },
      description: { type: "string" },
      startTime: { type: "number" },
      duration: { type: "number" },
      livestreamUrl: { type: "string" },
      thumbnailUrl: { type: "string" },
      completed: { type: "boolean" },
    },
  },
};

const routes = [
  {
    method: "GET",
    url: "/api/events",
    handler: eventController.getEvents,
  },

  {
    method: "GET",
    url: "/api/event/:id",
    handler: eventController.getSingleEvent,
  },
  {
    method: "POST",
    url: "/api/event",
    preHandler: async function (request, reply, done) {
      await middleware.check(request, reply);
      done();
    },
    schema: eventBodyJsonSchema,
    handler: eventController.addEvent,
  },

  {
    method: "POST",
    url: "/api/event/:id",
    preHandler: async function (request, reply, done) {
      await middleware.check(request, reply);
      done();
    },
    schema: eventBodyJsonSchema,
    handler: eventController.updateEvent,
  },
  {
    method: "DELETE",
    url: "/api/event/:id",
    preHandler: async function (request, reply, done) {
      await middleware.check(request, reply);
      done();
    },
    handler: eventController.deleteEvent,
  },
  {
    method: "GET",
    url: "/api/videos",
    handler: wistiaController.getVideos,
  },
];

module.exports = routes;
