const calculateBmi = (height: number, weight: number) => {
  height = (height / 100)
  const bmi = weight / (height * height)
  if (bmi < 18.5) {
    return "Underweight"
  } else if (bmi > 18.5 && bmi < 25) {
    return "Normal"
  } else {
    return "Overweight"
  }
}

console.log(calculateBmi(180, 75))