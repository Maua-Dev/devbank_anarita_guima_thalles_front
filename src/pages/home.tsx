export default function Home() {
    return (
    <div className="min-h-screen bg-blue-100 p-4"> 
      <div className="bg-blue-600 rounded-md px-8 py-6 flex justify-between items-start"> 
        <h1 className="text-6xl font-bold text-white"> 
          DEV{" "}
          <span className="text-red-300 [text-shadow:0_0_10px_#3b82f6,0_0_20px_#3b82f6]">
          BANK
          </span>
        </h1> 
        <div className="flex items-start gap-6">
        <div className="bg-white rounded-md px-4 py-2 text-blue-700 text-sm font-medium">
            <p>Nome:</p>
            <p>Agência: 0000</p>
            <p>Conta: 00000-0</p>
        </div>
        </div>
      </div>
        <div className="bg-blue-300 rounded-md mt-15 px-8 py-7 flex justify-between items-center w-11/12 mx-auto"> 
        <div className="text-4xl font-semibold text-black ">
            O que você deseja{" "} 
            <span className="text-blue-600">
                fazer
            </span>?
        </div>
        <div className="bg-blue-400 rounded-md px-25 py-7 text-white text-xl font-bold">
            Saldo Atual:   000 

        </div>
        </div>
        <div className="flex justify-center gap-20 w-11/12 mx-auto mt-10">
         <button className="flex-1 bg-blue-300 rounded-4xl p-40 flex flex-col items-center justify-center gap- shadow-lg hover:scale-105 active:scale-95 transition-all group">
        <span className="text-white text-4xl font-bold">
            Depositar
        </span>
        </button>

        <button className="flex-1 bg-blue-300 rounded-4xl p-40 flex flex-col items-center justify-center gap-6 shadow-lg hover:scale-105 active:scale-95 transition-all group">
        <span className="text-white text-4xl font-bold">
            Retirar
        </span>
        </button>

        <button className="flex-1 bg-blue-300 rounded-4xl p-40 flex flex-col items-center justify-center gap-6 shadow-lg hover:scale-105 active:scale-95 transition-all group">
        <span className="text-white text-4xl font-bold">
            Transação
        </span>
        </button>
        </div>
        <input
        type="text"
        placeholder="Coloque aqui o endpoint da sua API"
        className="flex justify-center gap-20 w-11/12 mx-auto mt-12 bg-blue-300 rounded-md active:scale-95
        placeholder: text-black
        placeholder: font-bold
        p-8
        placeholder:text-xl"
        />
    </div>

    );
}