import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  res.json({
    weight: _req.query.weight,
    height: _req.query.height,
    bmi: calculateBmi(Number(_req.query.height), Number(_req.query.weight))
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});