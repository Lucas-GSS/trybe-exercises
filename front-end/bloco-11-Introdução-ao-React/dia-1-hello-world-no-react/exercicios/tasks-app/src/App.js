import './App.css';

const Task = (value) => {
  return (<li>{value}</li>);
}

const listOftasks = ['Alongar', 'Tomar café', 'Revisão', 'SoftSkills', 'Monitorias', 'Aula ao vivo', 'Exercícios'];

function App() {
  return (
    Task(listOftasks.map((task) => {
      return Task(task);
    }))
  );
}

export default App;
