/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("customer_cart", function(table){
        table.increments();
        table.integer("customer_id");
        table.integer("product_id");
        table.string("product_name");
        table.string("description");
        table.integer("unit");
        table.float("price");

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("customer_cart");
  
};
