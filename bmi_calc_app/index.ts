import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercise } from './exerciseCalculator';
const app = express();

app.use(express.json());

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

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.json({
      error: 'missing parameters'
    });
  }

  if (isNaN(target as number) || daily_exercises.some(isNaN)) {
    res.json({
      error: 'malformatted parameters'
    });
  }

  res.json(calculateExercise(daily_exercises.map((x: any) => Number(x)) as number[], target as number));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});