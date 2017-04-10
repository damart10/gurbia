import express from 'express'

import dbConfig from './config/database'
import middlewareConfig from './config/middleware'

import { UserRoutes } from './modules'

const app = express();

dbConfig();

middlewareConfig(app);

app.use('/api', [UserRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log('Gurbia RESTful API server started on: ' + PORT);
});
