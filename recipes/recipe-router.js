const router = require('express').Router();
const Recipes = require('./recipe-model.js');

router.get('/dishes', (req, res) => {
  Recipes
    .getDishes()
    .then( dishes => {
      res.status(200).json({dishes});
    })
    .catch(err => {
      console.log(err);
    })
});

router.get('/recipes', (req, res) => {
  Recipes
    .getRecipes()
    .then( recipes => {
      res.status(200).json({recipes});
    })
    .catch(err => {
      console.log(err);
    })
});

router.get('/dishes/:id', (req, res) => {
  Recipes
    .getDish(req.params.id)
    .then(dish => {
      res.status(200).json({dish})
    })
    .catch(err => {
      console.log(err);
    })
});


module.exports = router;