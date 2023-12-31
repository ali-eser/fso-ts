import express from "express";
const cors = require('cors');
import diagnoseRouter from "./routes/diagnoseEntries";
import patientRouter from "./routes/patientEntries";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
  console.log('this endpoint was pinged');
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
});