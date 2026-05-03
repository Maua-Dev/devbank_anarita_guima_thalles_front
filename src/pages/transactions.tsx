import { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Nav/navbar';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import { getHistory } from '../services/api';

type Transaction = {
  type: string;
  value: number;
  current_balance: string | number;
  timestamp: number;
};

export default function Transactions() {
    const navigate = useNavigate();
    const { apiUrl } = useContext(ApiContext);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        if (!apiUrl) return;
        getHistory(apiUrl)
            .then(data => setTransactions(data.all_transactions || []))
            .catch(() => setTransactions([]));
    }, [apiUrl]);

    function traduzirTipo(tipo: string) {
    if (tipo === "DEPOSIT") return "Depósito";
    if (tipo === "WITHDRAW") return "Saque";
    return tipo;
    }

    return (
        <>
            <Navbar />

<div className="min-h-screen bg-blue-100 p-4"> 

      <div className="bg-blue-400 rounded-md mt-6 px-4 py-3 text-white text-2xl font-semibold">
        Histórico de transações
      </div>
      <div className="mt-4 space-y-4">

        {transactions.length > 0 ? transactions.map((item, index) => (  
          <div
            key={index}
            className="bg-blue-300 rounded-md px-6 py-6 text-blue-700">
             <div className="font-semibold mb-2 text-black">
                <p>-- {traduzirTipo(item.type.toUpperCase())} -- </p>
                <p>Valor: R$ {item.value}</p>
                <p>Saldo: R$ {item.current_balance}</p>
                <p>Data: {new Date(item.timestamp).toLocaleString()}</p>
                </div>
                </div>
        )) : (
            <div className="bg-blue-300 rounded-md px-6 py-6 text-black font-semibold">
                Nenhuma transação encontrada ou API não configurada.
            </div>
        )}

        <div className="flex justify-center gap-10 mt-10">
            <button
                onClick={() => navigate("/home")}
                className="bg-blue-500 text-white px-10 py-3 rounded-md font-bold hover:scale-105 active:scale-95"
            >
                Voltar
            </button>
        </div>
        </div>
      </div>
        </>
    );
}