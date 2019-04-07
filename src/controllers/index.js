const { Router } = require('express');

const services = require('../services');

const GameController = require('./game');

function buildController(app, container, Controller) {
  const controller = new Controller(container);
  const router = new Router();

  Controller.routes.forEach((route) => {
    const middlewares = [];

    router[route.method](route.path, ...middlewares, controller[route.handler].bind(controller));
    console.log(`${controller.constructor.name}.${route.handler} bound to ${route.method.toUpperCase()} ${route.path}`);
  });

  app.use(Controller.domain, router);
  console.log(`${controller.constructor.name} created router at ${Controller.domain}`);
}

module.exports = (app) => {
  const container = {
    services,
  };

  buildController(app, container, GameController);
};
