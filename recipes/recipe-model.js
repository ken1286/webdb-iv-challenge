const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db('dishes')
};

function getDish(id) {
  return db('dishes')
    .join('recipes', 'recipes.dish_id', 'dishes.id')
    .select('dishes.id as dishId', 'dishes.name as dishName', 'recipes.name as recipeName')
    .where({ 'recipes.dish_id': id });
};

function addDish(dish) {
  return db('dishes')
  .insert(dish)
  .then(ids => {
    return getDish(ids[0])
  })
};


function getRecipes() {
  return db('recipes')
    .join('dishes', 'recipes.dish_id', 'dishes.id')
    .select('recipes.*', 'dishes.name as dishName')
};

function addRecipe(recipe) {
  return db('recipes')
  .insert(recipe)
  // .then(ids => {
  //   return getDish(ids[0])
  // })
};

// async function execute(){

//   try {
//     const newDish = {"name": "tacos"};
//     const dish = await addDish(newDish);
//     console.log(dish);
//   }
//   catch {
//     console.log('error');
//   }
// }

// execute();