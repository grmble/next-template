import Knex from 'knex'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions, User } from 'next-auth'
import Providers from 'next-auth/providers'
import { SessionBase } from 'next-auth/_utils'


type Group = {
    id: number,
    group_name: string,
    user_id: number,
}

const db = Knex({
    client: "postgresql",
    connection: process.env.DATABASE_URL
})

function envOrError(name: string): string {
    const value = process.env[name]
    if (!value) {
        throw new Error(`Not process.env: ${name}`)
    }
    return value
}

const options: InitOptions = {
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: envOrError("GITHUB_ID"),
            clientSecret: envOrError("GITHUB_SECRET"),
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,

    callbacks: {
        // this only works with sessions...
        session: async (session: SessionBase, user: User & { id?: number }) => {
            const groups = await db
                .select("group_name")
                .from<Group>("groups")
                .where("user_id", user.id)
            return Promise.resolve({ ...session, groups: groups.map(x => x.group_name) })
        }
    }
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, options)
