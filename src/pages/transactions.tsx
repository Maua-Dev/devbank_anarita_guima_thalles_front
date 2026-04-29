export default function Transactions() {
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

        <div className="flex justify-center mt-6 w-1/6 mx-auto mt-6 bg-blue-700 rounded-md py-10 hover:scale-105 active:scale-95 transition-all group">
             <button className="text-4xl text-white font-medium text-center">
                Voltar
            </button>

          </div>
        </div>
      </div>
    );
}