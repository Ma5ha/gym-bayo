
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { prisma } from '@prisma';
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async(req, res) => {
  const data= await prisma.user.findFirst()
  console.log(data)
  res.send(data)
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
