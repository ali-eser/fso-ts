interface HeaderType {
  name: string
}

interface ContentType {
  courseParts: {
    name: string,
    exerciseCount: number
  }[]
}

interface TotalType {
  total: number
}

const Header = (props: HeaderType) => (
  <h1>{props.name}</h1>
);

const Content = (props: ContentType) => (
  <div>
    <p>{props.courseParts[0].name} {props.courseParts[0].exerciseCount}</p>
    <p>{props.courseParts[1].name} {props.courseParts[1].exerciseCount}</p>
    <p>{props.courseParts[2].name} {props.courseParts[2].exerciseCount}</p>
  </div>
);

const Total = (props: TotalType) => (
  <p>Number of exercises {props.total}</p>
);

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header name={courseName}/>
      <Content courseParts={courseParts} />
      <Total total={totalExercises}/>
    </div>
  );
};

export default App;