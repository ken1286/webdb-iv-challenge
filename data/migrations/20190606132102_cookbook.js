
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('dishes', (tbl) => {
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();
  })

  await knex.schema.createTable('recipes', (tbl) => {
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();

    tbl
      .integer('dish_id')
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    
    tbl
      .string('instructions', 128)
      .notNullable()
      .unique();
  })

  await knex.schema.createTable('ingredients', (tbl) => {
    tbl.increments();
    tbl
      .string('name', 128)
      .notNullable();
  })

  await knex.schema.createTable('recipes_ingredients', (tbl) => {
    tbl.increments();

    tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .float('quantity', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};

/*
exports.up = function(knex, Promise) {
  // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created
  return knex.schema
    .createTable('tracks', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('cohorts', tbl => {
      // the tracks table must be created before this table is created
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl
        .integer('track_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tracks')
        .onDelete('RESTRICT') // explain how cascading works
        .onUpdate('CASCADE');
    })
    .createTable('students', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
    })
    .createTable('cohort_students', tbl => {
      // the students and cohorts tables must be created before this table is created
      tbl.increments();
      tbl
        .integer('cohort_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cohorts')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('student_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('students')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};
exports.down = function(knex, Promise) {
  // tables with FK must be removed before the referenced table is removed
  return knex.schema
    .dropTableIfExists('cohort_students')
    .dropTableIfExists('students')
    .dropTableIfExists('cohorts')
    .dropTableIfExists('tracks');
};
*/
