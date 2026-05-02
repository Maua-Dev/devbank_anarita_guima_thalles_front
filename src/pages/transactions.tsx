

import Navbar from '../components/Nav/navbar';
import { useNavigate } from 'react-router-dom';

export default function Transactions() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />

<div className="min-h-screen bg-blue-100 p-4"> 

      <div className="bg-blue-400 rounded-md mt-6 px-4 py-3 text-white text-2xl font-semibold">
        Histórico de transações
      </div>
      <div className="mt-4 space-y-4">

        {[1, 2, 3].map((item) => (  
          <div
            key={item}
            className="bg-blue-300 rounded-md px-6 py-6 text-blue-700">
             <div className="font-semibold mb-2 text-black">
                <p>-- DEPÓSITO -- </p>
                <p>Valor:</p>
                <p>Saldo:</p>
                <p>Data:</p>
                </div>
                </div>
        ))}

        <div className="flex justify-center gap-10 mt-10">
            <button
                onClick={() => navigate("/")}
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