import { useState } from "react";
import InputI from "./Input-idade.js";
import InputII from "./Input-nome.js";


export default function App(){
  const [idade, setIdade] = useState("")
  const [nome, setNome] = useState("")

  return(
    <div>
      <InputI setIdade={setIdade} />
      <InputII setNome={setNome} />

      <p>{idade === "" ? "me diga sua idade" : idade >= 18 ? "você é maior, bem vindo" : "você é menor, saia"}</p>
      <p>{nome === "" ? "insira seu nome" : 'que nome lindo'}</p>

    </div>
  )
}