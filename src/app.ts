import express, { Request, Response } from 'express';
import { name, version } from '../package.json';
import { pdfGenerator } from './domain/pdf.generator';
const app = express();

app.use(express.json());
app.locals.name = name.toUpperCase();
app.locals.version = version;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ name, version })
})

app.get('/pdf', async (req: Request, res: Response) => {
  const pdf = await pdfGenerator.generate();
  res.contentType("application/pdf");
  res.send(pdf);
})

app.get('/from-template', async (req: Request, res: Response) => {
  const pdf = await pdfGenerator.fromTemplate();
  res.contentType("application/pdf");
  res.send(pdf);
})

export { app };
