require('dotenv').config();
import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import { handleError } from "./utils/errors";
import router from "./routes";

const app = express();
const port = process.env.PORT || 4568;

//app.use(cors());
app.use(express.json());

app.use(router);

//Handler de erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  handleError(err, response);
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
