# Next.js App

* Bootstrap the project by running `yarn create next-app`
* `yarn dev` to run the development server, open http://localhost:3000 to see the result.
* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Typescript

* `touch tsconfig.json`, then run `yarn run dev`.  This will give you a list
  of dependencies to install.  Do so.
* Rename Api pages to `.ts` and pages with JSX to `.tsx`
* Request and response types are `NextApiRequest` and `NextApiResponse<YourDataType>`
* For static/server props the types are `GetStaticProps`, `GetStaticPaths` and `GetServerSideProps`
* The Application in `_app.tsx` takes an `AppProps` tuple.

## Bulma

* `yarn add bulma`
* Delete the stylesheets, `import bulma/css/bulma.css` in `_app.tsx`
* You can have per Module imports in `Name.module.css`, import via `import styles from './styles/Name.module.css'`
* Use the per-module styles as `className={styles.yourClass}`

## Classnames

* `yarn add classnames && yarn add -D @types/classnames`
* Gives you `classnames('foo', {bar: true})`

## Next-Auth

* `yarn add next-auth pg && yarn add -D @types/next-auth`
* Add API route `[...nextauth].ts`

    import NextAuth from 'next-auth'
    import Providers from 'next-auth/providers'

    const options = {
      // Configure one or more authentication providers
      providers: [
        Providers.GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
        // ...add more providers here
      ],

      // A database is optional, but required to persist accounts in a database
      // database: process.env.DATABASE_URL,
    }

    export default (req, res) => NextAuth(req, res, options)

* Add `GITHUB_ID`, `GITHUB_SECRET` and DATABASE_URL to `.env.local`
  (DATABASE_URL=postgres://gj:NotShown@127.0.0.1:5432/next_test?synchronize=true - synchronized
  should not be used on production)
* `createuser -Upostgres -d -r -s gj`
* `createdb -Upostgres -Ogj -EUnicode next_test`



## Knex is for databases

* `yarn add knex pg && yarn add @types/knex`
* If you want typed migrations, you need a `knexfile.ts` - if this is
  not typescript, it will not call typescript migrations.
* The `knexfile.ts` and the migrations need their own tsconfig, because
  the next.js one does not work for them. yarn workspaces are one solution,
  or simply setting `TS_NODE_PROJECT=tsconfig.klex.json`
* You need `tn-node` and `knexfile.ts` must require `ts-node/register`.

In the example knexfile, the database is read from the environment,
so you have to `source ./.env.local` before running the klex commands.

## GraphQL

https://blog.logrocket.com/building-a-graphql-server-in-next-js/

See also typegraphql ... but this is a lot of work.

"enterprise software"


