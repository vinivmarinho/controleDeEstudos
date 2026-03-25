import './App.css'
import Card from './components/card/card';
import AddSubject from './components/addSubject/addSubject';
function App() {

  return (
    <main className="main-container">
      <h1>📚 Study tracker</h1>

      <div className="dashboard">
        {/* Componentes Card */}
        <Card titulo="Total de matérias" info="0"/>
        <Card titulo="horas estudadas" info="0h"/>
        <Card titulo="Meta diária" info="0h"/>
      </div>
      
      <AddSubject />
    </main>
  )
}

export default App;
