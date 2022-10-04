/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {id: 1, name: 'Rolex', description: 'watch from rolex', stock: '5', price: '1000'},
    {id: 2, name: 'Timex', description:' watch from timex', stock: '2', price: '500'},
    {id: 3, name: 'Hublot', description: 'watch from hublot', stock: '7', price: '600'},
    {id: 4, name: 'AP', description: 'watch from AP', stock: '7', price: '2600'}
  ]);
};
