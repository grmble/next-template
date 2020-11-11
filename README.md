# Next.js App

* Bootstrap the project by running `yarn create next-app`
* `yarn run dev` to run the development server, open http://localhost:3000 to see the result.
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

* `yarn add next-auth && yarn add -D @types/next-auth`
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
