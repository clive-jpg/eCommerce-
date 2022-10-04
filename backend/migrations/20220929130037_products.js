/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("products", (table)=>{
        table.increments();
        table.string("name");
        table.string("description");
        table.integer("stock");
        table.float("price");
        table.timestamps(false, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("customer");
  
};
