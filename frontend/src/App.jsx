import './App.css'
import Card from './components/card/card';
import AddSubject from './components/addSubject/addSubject';
import { useState, useEffect } from "react";

function App() {
  const [totalSubjects, setTotalSubjects] = useState("");
  const [totalTime, setTotalTime] = useState("");
  
  async function fetchStats() {
    try{
      const res = await fetch("http://localhost:3000/study");
      const data = await res.json();
      setTotalSubjects(data.length);


      /* Guarda a quantidade de horas estudadas dentro de "data" e transforma para um número inteiro */
      const total = Math.floor(data.reduce((total, item) => total + item.duration, 0) / 60);
      setTotalTime(total);
      

    } catch(error) {
      console.error("Erro ao buscar dados", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);


  return (
    <main className="main-container">
      <h1>📚 Study tracker</h1>

      <div className="dashboard">
        {/* Componentes Card */}
        <Card titulo="Total de matérias" info={totalSubjects}/>
        <Card titulo="horas estudadas" info={totalTime} isTime={true}/>
        <Card titulo="Meta diária" info="4" isTime={true}/>
      </div>
      
        <AddSubject onAdd={fetchStats} /> {/* Passo a função fetchStats para onAdd */}
      
    </main>
  )
}

export default App;
