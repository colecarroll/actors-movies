
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('movie', (table) => {
      table.increments().primary
      table.string('title')
      table.integer('director_id').references('person.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('movie')
  ])
};
