// // get data from the sql database


// import { NextApiRequest, NextApiResponse } from 'next'
// import { query } from '../../lib/db'

// export default async function getData(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const results = await query(`
//       SELECT * FROM users
//     `)

//     return res.json(results)
//   } catch (e) {
//     res.status(500).json({ message: e.message })
//   }
// }


import { createClient } from "@libsql/client";
import { NextApiRequest, NextApiResponse } from "next";
require('dotenv').config()

const client = createClient({
  url: process.env.URL ?? "",
  authToken: process.env.AUTH_TOKEN
});



export default async function getData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await client.execute("SELECT * FROM wordvisualizer ORDER BY id DESC;");


    return res.json(result)
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}
