// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  res.statusCode = 200
  if (session) {
    res.json(session)
  }
  res.json({})
}
