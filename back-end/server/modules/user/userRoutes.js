'use strict';

import { Router } from 'express'
import * as UserController from './userController'

const routes = new Router();

routes.use( (req, res, next) => {
  console.log('Request: ' + req.method
  + ' at: ' + req.url
  + ' with body: ' + { ...req.body }
  + ' and params: ' + req.params)
  next()
});

routes.post('/user', UserController.authenticate);
routes.post('/user/new', UserController.createUser);

routes.get('/user/:userId', UserController.getUser);
routes.put('/user/:userId', UserController.updateUser);
routes.delete('/user/:userId', UserController.deleteUser);

export default routes;