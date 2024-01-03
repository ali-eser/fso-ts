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
  interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
  
  interface CoursePartBasic extends CoursePartBase {
    description: string;
    kind: "basic"
  }
  
  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
  interface CoursePartBackground extends CoursePartBase {
    description: string;
    backgroundMaterial: string;
    kind: "background"
  }
  
  type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;
  
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
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