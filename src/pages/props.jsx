
 export function Student(props) {
  return (
  
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student
        name="Dipal Tamang"
        age="20"
        course="Cyber Nexus"
      />
    </div>
  );
}

export default App;