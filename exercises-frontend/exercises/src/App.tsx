interface HeaderType {
  name: string
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartBase {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartBase {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartInterface extends CoursePartBase {
  description: string;
  kind: "background" | "basic" | "special"
}

interface CoursePartSpecial extends CoursePartBase {
  requirements: string[];
  kind: "special"
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartInterface | CoursePartSpecial;

interface TotalType {
  total: number
}

const Header = (props: HeaderType) => (
  <h1>{props.name}</h1>
);

const Part = (props: CoursePart) => {
  switch (props.coursePart.kind) {
    case "basic":
      return (
        <div>
          <h4>{props.coursePart.name}</h4>
          <p><b>description:</b> {props.coursePart.description}</p>
          <p><b>exercise count:</b> {props.coursePart.exerciseCount}</p>
        </div>
      )
    case "group":
      return (
        <div>
          <h4>{props.coursePart.name}</h4>
          <p><b>exercise count:</b> {props.coursePart.exerciseCount}</p>
          <p><b>group project count:</b> {props.coursePart.groupProjectCount}</p>
        </div>

      )
    case "background":
      return (
        <div>
          <h4>{props.coursePart.name}</h4>
          <p><b>description:</b> {props.coursePart.description}</p>
          <p><b>background material: </b>{props.coursePart.backgroundMaterial}</p>
        </div>
      )
    case "special":
      return (
        <div>
          <h4>{props.coursePart.name}</h4>
          <p><b>description:</b> {props.coursePart.description}</p>
          <b>requirements: </b>
          <ul>
            {props.coursePart.requirements.map(req => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
      )
  }
};

const Content = (props: CoursePart[]) => (
  <div>
    {props.courseParts.map(part => (
      <div>
        <Part coursePart={part} key={part.name}/>
        <hr />
      </div>

    ))}
  </div>
);

const Total = (props: TotalType) => (
  <p>Number of exercises {props.total}</p>
);

const App = () => {
  const courseName = "Half Stack application development";
  
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
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
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