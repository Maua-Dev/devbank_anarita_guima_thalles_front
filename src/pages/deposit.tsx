import { useState, useContext } from "react"
import Note from '../components/BankNote/banknote'
import Navbar from '../components/Nav/navbar'
import { deposit } from '../services/api'
import { ApiContext } from '../context/ApiContext'
import { useNavigate } from "react-router-dom"

export default function Deposit() {

    const navigate = useNavigate();
    const { apiUrl } = useContext(ApiContext);
    const [requestDaImagem, setRequestDaImagem] = useState({
        "2": 0,
        "5": 0,
        "10": 0,
        "20": 0,
        "50": 0,
        "100": 0,
        "200": 0
    });

    function calcularTotal() {
    let total = 0;
    Object.entries(requestDaImagem).forEach(([valor, qtd]) => {
        total += Number(valor) * qtd;
    });
    return total;
    }

    function atualizarQuantidade(valor: string, quantidade: number) {
    setRequestDaImagem(prev => ({
        ...prev,
        [valor]: quantidade
    }));
    }

    async function handleDeposit() {
    const total = calcularTotal();

    if (total <= 0) {
        alert("Selecione ao menos uma nota");
        return;
    }

    try {
        await deposit(apiUrl, total);
        alert("Depósito realizado com sucesso!");
        navigate("/");
    } catch {
        alert("Erro ao depositar");
    }
    }


    return (
        <>
            <Navbar />
        <div className="p-5 bg-gray-50 min-h-screen">
            <div className="flex flex-row bg-[#B5D7F8] w-full h-18 rounded-2xl mb-5 gap-5 justify-center items-center p-5 ">
                <div className="basis-1/3 text-white font-bold bg-[#7EB9F2] p-5 rounded-2xl">Quantidade a depositar : </div>
                <div className="basis-1/3 text-white font-bold">Saldo Disponivel : </div>
                <div className="basis-1/3 text-white font-bold">Saldo Resultante : </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(requestDaImagem).map(([valorDaNota, quantidade]) => (
                    <Note 
                        key={valorDaNota} 
                        noteValue={valorDaNota} 
                        quantity={quantidade}
                        onChangeQuantity={(qtd: number) => atualizarQuantidade(valorDaNota, qtd)}
                    />
                ))}
            </div>

            <div className="flex justify-center gap-10 mt-10">
            <button
                onClick={() => navigate("/")}
                className="bg-blue-500 text-white px-10 py-3 rounded-md font-bold hover:scale-105 active:scale-95"
            >
                Voltar
            </button>

            <button
                onClick={handleDeposit}
                className="bg-blue-700 text-white px-10 py-3 rounded-md font-bold hover:scale-105 active:scale-95"
            >
                Depositar
            </button>
            </div>
 

        </div>
        </>
    );
}
