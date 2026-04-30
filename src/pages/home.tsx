import Navbar from '../components/Nav/navbar';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-100 p-4">
      


        {/* Seção de Saldo */}
        <div className="bg-blue-300 rounded-md mt-15 px-8 py-7 flex justify-between items-center w-11/12 mx-auto">
          <div className="text-4xl font-semibold text-black ">
            O que você deseja{" "}
            <span className="text-blue-600">fazer</span>?
          </div>
          <div className="bg-blue-400 rounded-md px-25 py-7 text-white text-xl font-bold">
            Saldo Atual: 000
          </div>
        </div>

       
        <div className="flex justify-center gap-20 w-11/12 mx-auto mt-10">
            <Link to="/deposit"className="flex-1 bg-blue-300 rounded-2xl py-20 flex flex-col items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all group">
                <span className="text-white text-3xl font-bold">Depositar</span>
            </Link>

            <Link to="/deposit"className="flex-1 bg-blue-300 rounded-2xl py-20 flex flex-col items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all group">
                <span className="text-white text-3xl font-bold">Depositar</span>
            </Link>

            <Link to="/deposit"className="flex-1 bg-blue-300 rounded-2xl py-20 flex flex-col items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all group">
                <span className="text-white text-3xl font-bold">Depositar</span>
            </Link>
        </div>

        {/* Input da API */}
        <input
          type="text"
          placeholder="Coloque aqui o endpoint da sua API"
          className="flex justify-center gap-20 w-11/12 mx-auto mt-12 bg-blue-300 rounded-md active:scale-95 p-8 text-black font-bold text-xl placeholder:text-black placeholder:font-bold placeholder:text-xl"
        />
      </div>
    </>
  );
}