"use client";

import { useState } from "react"

export default function Media() {
    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")
    const [nota4, setNota4] = useState("")
    const [nota5, setNota5] = useState("")

    function calcularMedia () {
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);
        const n4 = parseFloat(nota4);
        const n5 = parseFloat(nota5);


    }

    return (
        <>
            <h1 className="text-[2em] font-bold w-full flex items-center justify-center text-azul mt-5 mb-5">Media - ROTA 3</h1>
            <label htmlFor="">Notas</label>
            <input type="number" placeholder="Digite a primeira nota" value={nota1} onChange={(e) => setNota1(e.target.value)} />
            <input type="number" placeholder="Digite a segunda nota" value={nota2} onChange={(e) => setNota2(e.target.value)} />
            <input type="number" placeholder="Digite a terceira nota" value={nota3} onChange={(e) => setNota3(e.target.value)} />
            <input type="number" placeholder="Digite a quarta nota" value={nota4} onChange={(e) => setNota4(e.target.value)} />
            <input type="number" placeholder="Digite a quinta nota" value={nota5} onChange={(e) => setNota5(e.target.value)} />
        </>
    )
}