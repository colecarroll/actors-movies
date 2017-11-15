
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person_movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('person_movie').insert([
        {
          person_id: 1,
          movie_id: 1
        },
        {
          person_id: 2,
          movie_id: 1
        },
        {
          person_id: 3,
          movie_id: 1
        },
        {
          person_id: 4,
          movie_id: 2
        },
        {
          person_id: 5,
          movie_id: 2
        }
      ]);
    });
};
