
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {
          name: 'Colin Trevorrow',
          role: 'director'
        },
        {
          name: 'Chris Pratt',
          role: 'actor'
        },
        {
          name: 'Bryce Dallas Howard',
          role: 'actor'
        },
        {
          name: 'Steven Spielberg',
          role: 'director'
        },
        {
          name: 'Jeff Goldblum',
          role: 'actor'
        }

      ]);
    });
};
