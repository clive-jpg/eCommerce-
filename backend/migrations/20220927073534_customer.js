/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("customer", (table)=>{
        table.increments();
        table.string("name").notNullable();
        table.string("email").notNullable().unique();
        table.string("password");
        table.integer("phone_number")
        table.string("facebook_id")
        table.string("google_id")
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
