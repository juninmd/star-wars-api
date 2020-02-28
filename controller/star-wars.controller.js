const starWarsApi = require('../api/star-wars.api');

module.exports = (app) => {
  app.get('/starwars', async (req, res, next) => {
    try {
      const response = await starWarsApi.getAll();
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/starwars/:id', async (req, res, next) => {
    try {
      const response = await starWarsApi.getById(req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.post('/starwars/', async (req, res, next) => {
    try {
      await starWarsApi.insert(req.body);
      return res.send({}).status(201);
    } catch (error) {
      next(error);
    }
  });

  app.put('/starwars/:id', async (req, res, next) => {
    try {
      await starWarsApi.update(req.body);
      return res.send({}).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/starwars/:id', async (req, res, next) => {
    try {
      await starWarsApi.delete(req.params.id);
      return res.send({}).status(204);
    } catch (error) {
      next(error);
    }
  });
};