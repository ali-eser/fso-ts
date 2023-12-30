interface Stats {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercise = (exerciseDays: number[], target: number): Stats => {
  let totalHours = 0;
  let trainingDays = 0;
  let success: boolean;
  let rating: number;
  let ratingDescription: string;

  for (let i = 0; i < exerciseDays.length; i++) {
    totalHours += exerciseDays[i];
    if (exerciseDays[i] != 0) {
      trainingDays += 1;
    }
  }

  const average: number = totalHours / exerciseDays.length;

  if (average >= target) {
    success = true;
    rating = 3;
    ratingDescription = "well done!";
  } else if (target - average <= 1) {
    success = false;
    rating = 2;
    ratingDescription = "could be better";
  } else {
    success = false;
    rating = 1;
    ratingDescription = "not enough";
  }

  return {
    periodLength: exerciseDays.length,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average
  };
};

const param1: number[] = [];

for (let i = 2; i < process.argv.length - 1; i++) {
  param1.push(Number(process.argv[i]));
}

const param2: number = Number(process.argv[process.argv.length - 1]);

console.log(calculateExercise(param1, param2));