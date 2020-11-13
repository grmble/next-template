import Knex from 'knex'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

type Group = {
    id: number,
    group_name: string,
    user_id: number,
}

const db = Knex({
    client: "postgresql",
    connection: process.env.DATABASE_URL
})


const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,

    callbacks: {
        // this only works with sessions...
        session: async (session: any, user: any, sessionToken: string) => {
            const groups = await db
                .select("group_name")
                .from<Group>("groups")
                .where("user_id", user.id)
            session.groups = groups.map(x => x.group_name)
            return Promise.resolve(session)
        }
    }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options as any)
