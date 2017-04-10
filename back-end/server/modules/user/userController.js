'use strict';

import mongoose from 'mongoose'

import User from './userModel'

exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  })
}

exports.authenticate = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || req.body.password !== user.password) {
      return res.status(400).json({
        error: true,
        message: 'Incorrect email or password, please try again'
      });
    }
    res.status(200).json(user);
  })
}

exports.getUser = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(req.params.userId, req.body, {new: true}, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

exports.deleteUser = (req, res) => {
  User.remove({
    _id: req.params.userId
  }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User successfully deleted'});
  });
};