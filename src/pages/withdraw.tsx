import { useState } from "react"
import Note from '../components/BankNote/banknote'

export default function Deposit() {

    const [requestDaImagem, setRequestDaImagem] = useState({
        "2": 0,
        "5": 0,
        "10": 0,
        "20": 0,
        "50": 0,
        "100": 0,
        "200": 0
    });



    return (
        <div className="p-5 bg-gray-50 min-h-screen">
            <div className="flex flex-row bg-[#B5D7F8] w-full h-18 rounded-2xl mb-5 gap-5 justify-center items-center p-5 ">
                <div className="basis-1/3 text-white font-bold bg-[#7EB9F2] p-5 rounded-2xl">Quantidade a sacar : </div>
                <div className="basis-1/3 text-white font-bold">Saldo Disponivel : </div>
                <div className="basis-1/3 text-white font-bold">Saldo Resultante : </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(requestDaImagem).map(([valorDaNota, quantidade]) => (
                    <Note 
                        key={valorDaNota} 
                        noteValue={valorDaNota} 
                        quantity={quantidade}
                    />
                ))}
            </div>

 

        </div>
    );
}
