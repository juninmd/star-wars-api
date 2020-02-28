const app = require('express')();
const bodyParser = require('body-parser');
const consign = require('consign');
require('dotenv').config({ path: `./env/${process.env.NODE_ENV || 'development'}.env` });
const config = require('./config');

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', req.header('access-control-request-headers' || '*'));
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(204).send();
  }
  next();
});

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

consign({
  verbose: false,
}).include('controllers').into(app);

app.listen(config.api.port, () => {
  console.log(`Aplicação - Ativa :D | ${config.api.url}:${config.api.port}`);
});

module.exports = app;