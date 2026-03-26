import "./addSubject.css"
import { useState } from "react";
export default function AddSubject({ onAdd }) {
    const [subject, setSubject] = useState("");
    const [duration, setSDuration] = useState("");

    async function handleSubmit(event) {
        /* Previne o recarregamento da página */
        event.preventDefault();

        await fetch("http://localhost:3000/study", {
            method: "POST",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                subject,
                duration: Number(duration)
            })
        });
        console.log("Enviando dados...");

        // Limpa os inputs depois que o formulário é enviado
        setSubject("");
        setSDuration("");

        // Chama a função (fetchStats), atualizando o dashboard
        onAdd();
        console.log("Dados enviados com sucesso");
    }

    return(
        <div>
            <h2>Adicionar estudo</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Matéria"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                ></input>

                <input
                    type="number"
                    placeholder="Duração (min)"
                    value={duration}
                    onChange={(event) => setSDuration(event.target.value)}
                ></input>

                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

/* Rota que lista as matérias: "http://localhost:3000/study" */
/* Rota que adiciona alguma matéria: "http://localhost:3000/study" */