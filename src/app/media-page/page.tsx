"use client";

import { useState } from "react"

export default function Media() {
    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")
    const [nota4, setNota4] = useState("")
    const [nota5, setNota5] = useState("")
    const [erro, setErro] = useState("")
    const [media, setMedia] = useState(0)

    const calcularMedia = () => {
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);
        const n4 = parseFloat(nota4);
        const n5 = parseFloat(nota5);
        
        if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4) && !isNaN(n5)){
            setMedia((n1+n2+n3+n4+n5)/5);
        } else {
            setMedia(0);
            setErro("Digite apenas números válidos!")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[2em] font-bold w-full flex items-center justify-center text-azul mt-24 mb-24">Media - ROTA 3</h1>
            <div className="rounded-md p-12 lg:w-1/3 md:w-4/5 flex flex-col items-center justify-center sm:w-[90%] shadow-2xl">
                <h3 className="text-[2em] font-bold text-azul mb-4 w-full items-start">Notas</h3>
                <label className="w-full flex flex-row gap-2 font-bold">01°<input className="font-normal border-b w-full mb-6 border-azul" type="number" placeholder="Digite a primeira nota..." value={nota1} onChange={(e) => setNota1(e.target.value)} /></label>
                <label className="w-full flex flex-row gap-2 font-bold">02°<input className="font-normal border-b w-full mb-6 border-azul" type="number" placeholder="Digite a segunda nota..." value={nota2} onChange={(e) => setNota2(e.target.value)} /></label>
                <label className="w-full flex flex-row gap-2 font-bold">03°<input className="font-normal border-b w-full mb-6 border-azul" type="number" placeholder="Digite a terceira nota..." value={nota3} onChange={(e) => setNota3(e.target.value)} /></label>
                <label className="w-full flex flex-row gap-2 font-bold">04°<input className="font-normal border-b w-full mb-6 border-azul" type="number" placeholder="Digite a quarta nota..." value={nota4} onChange={(e) => setNota4(e.target.value)} /></label>
                <label className="w-full flex flex-row gap-2 font-bold">05°<input className="font-normal border-b w-full mb-6 border-azul" type="number" placeholder="Digite a quinta nota..." value={nota5} onChange={(e) => setNota5(e.target.value)} /></label>
                <button onClick={() => calcularMedia()} className="shadow-inner bg-amarelo p-2 pr-10 pl-10 font-semibold mt-4 mb-4">Calcular Média</button>
                <div className="border border-azul flex flex-col items-center justify-center shadow-md p-3 w-[40%] rounded-lg mt-4">
                    <h2>Resultado: </h2>
                    <h1 className="text-[2em] font-bold ">{media}</h1>
                    <h2 className={media && media >= 7 ? "text-green-800 font-extrabold text-[1.5em]" : "text-red-800 font-extrabold text-[1.5em]"}>{media && media >= 7 ? "APROVADO" : "REPROVADO"}</h2>
                </div>
            </div>
        </div>
    )
}