import "./addSubject.css"
export default function AddSubject() {
    return(
        <div>
            <h2>Adicionar estudo</h2>
            <form className="form">
                <input
                    placeholder="Matéria"
                ></input>

                <input
                    placeholder="Horas"
                    type="number"
                ></input>

                <button onClick={() => {alert("Funcionou")}}>Adicionar</button>
            </form>
        </div>
    )
}

/* Rota que lista as matérias: "http://localhost:3000/study" */
/* Rota que adiciona alguma matéria: "http://localhost:3000/study" */