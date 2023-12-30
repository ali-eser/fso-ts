export const calculateBmi = (height: number, weight: number) => {
  height = (height / 100);
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 25) {
    return "Normal";
  } else {
    return "Overweight";
  }
};

const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);

calculateBmi(height, weight);