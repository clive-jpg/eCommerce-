/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('purchase_history').del()
  await knex('purchase_history').insert([
    {id: 1, customer_id: '1', product_id: '1', unit: 1, product_name: 'Rolex' , price: 1000, status: 'pending'},
    {id: 2, customer_id: '2', product_id: '3', unit: 2, product_name: 'Hublot' , price: 2000, status: 'pending'},
    {id: 3, customer_id: '2', product_id: '1', unit: 1, product_name: 'Rolex' , price: 3500, status: 'delivered'},
    {id: 4, customer_id: '2', product_id: '1', unit: 1, product_name: 'Rolex' , price: 3500, status: 'pending'},
  ]);
};
