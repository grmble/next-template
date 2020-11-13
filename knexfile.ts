require('ts-node/register');

module.exports = {

    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
        tableName: "knex_migrations",
        extension: "ts"
    }
}
