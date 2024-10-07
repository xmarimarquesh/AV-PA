"use client"

import { use, useState } from "react"

export default function IMC() {

    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [IMC, setIMC] = useState(0)
    const [message, setMessage] = useState("")
    const [erro, setErro] = useState("")

    function calcularIMC () {
        const peso_float = parseFloat(peso);
        const altura_float = parseFloat(altura);

        if(!isNaN(peso_float) && !isNaN(altura_float)){
            setIMC(peso_float / (altura_float*altura_float));
            if(IMC){
                if(IMC >= 18.5 && IMC <= 24.9){
                    setMessage("Peso normal")
                } else if (IMC >= 25 && IMC <= 29.9){
                    setMessage("Sobrepeso")
                } else if (IMC >= 30 && IMC <= 34.9){
                    setMessage("Obesidade Grau I")
                } else if (IMC >= 35 && IMC <= 39.9){
                    setMessage("Obesidade Grau II")
                } else if (IMC >= 40 && IMC <= 49.9){
                    setMessage("Obesidade Grau III")
                } else if (IMC >= 50 && IMC <= 59.9){
                    setMessage("Obesidade Grau IV")
                } else if ( IMC >= 60) {
                    setMessage("Obesidade Grau V")
                } else {
                    setMessage("Abaixo do peso")
                }
            }
        } else {
            setErro("Digite apenas números válidos!")
        }


    }
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[2em] font-bold w-full flex items-center justify-center text-azul mt-24 mb-24">IMC - ROTA 2</h1>
        <div className=" flex flex-col lg:w-[50%] items-center justify-center p-14 sm:w-[90%] shadow-2xl">
            <div>
                <label className="text-[1.5em] font-bold mt-24" htmlFor="">Peso: </label>
                <input className="p-2 w-full border-b-2 border-azul" type="number" placeholder="Digite o peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
                <label className="text-[1.5em] font-bold mt-24" htmlFor="">Altura: </label>
                <input className="p-2 w-full border-b-2 border-azul" type="number" placeholder="Digite a altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </div>
            <button className="shadow-inner bg-amarelo p-2 pr-10 pl-10 font-semibold mt-4 mb-4" onClick={calcularIMC}>Calcular</button>
            <h2 className="text-[1.5em] font-bold">Seu IMC é: </h2>
            <div className="flex flex-col items-center justify-center bg-branco p-3 w-[40%] rounded-lg  shadow-lg">
                <h1 className="text-[2em] font-bold">{!isNaN(IMC ?? NaN) ? IMC.toFixed(2) : erro}</h1>
                <h2 className="text-[1.5em]">{message}</h2>
            </div>
        </div>
        </div>
    )
}