/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("admin_users", (table)=>{
        table.increments();
        table.string("name").notNullable();
        table.string("email").notNullable().unique();
        table.string("password");
        table.integer("phone_number")
        table.timestamps(false, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("admin_users");
  
};
