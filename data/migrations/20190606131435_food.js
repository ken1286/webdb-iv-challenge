
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('dishes', (tbl) => {
    
  })

  await knex.schema.createTable('recipes', (tbl) => {
    
  })

  await knex.schema.createTable('ingredients', (tbl) => {
    
  })
};

exports.down = function(knex, Promise) {
  
};
