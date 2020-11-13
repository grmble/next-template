import * as Knex from "knex";

/*
 * groups to go along with next auth users
 *
 * the next auth tables are created via the
 * synchronize option or by the scripts
 * provided by next auth.
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("groups", table => {
        table.increments("id")
        table.string("group_name", 64).notNullable()
        table.integer("user_id").notNullable()

        table.index("user_id")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("groups")
}

