/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("purchase_history", (table)=>{
        table.increments();
        table.integer("customer_id").unsigned();
        table.integer("product_id").unsigned();
        table.integer("unit");
        table.string("product_name");
        table.float("price");
        table.string("status")
        table.timestamps(false, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("purchase_history");
  
};
