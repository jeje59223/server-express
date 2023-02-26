import { Request, Response } from "express";
const express = require("express");
const morgan = require('morgan');

const server = express();
const BFF_PORT = process.env.PORT || process.env.BFF_PORT || 3001;

server.listen(BFF_PORT, () => console.log(`Video games listening on port ${BFF_PORT}!`));
server.use(morgan('dev'));

server.use('/', (req: Request, res: Response) => {
  console.log(req.path)
  res.send('Bonjour tout le monde !')
  console.log('Hello World !')
});
