
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('person', (table) => {
      table.increments().primary
      table.string('name')
      table.string('role')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('person')
  ])
};
