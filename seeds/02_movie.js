
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {
          title: 'Jurassic World',
          director_id: 1
        },
        {
          title: 'Jurassic Park',
          director_id: 4
        }
      ]);
    });
};
