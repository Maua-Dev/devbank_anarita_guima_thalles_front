

export default function Login() {
    return (
        <div className = "min-h-screen white flex items-center justify-center" >
            <div className="bg-blue-200 p-40 rounded-lg w-[2000px]">
                <h1 className=" font-bold text-white text-center mb-60 text-8xl">
                DEV {" "}
                <span className="text-red-300 [text-shadow:0_010px#3b82f6,0_020px#3b82f6]">
                BANK
                </span>
                </h1>

                <input
                type="text"
                placeholder="Coloque aqui o endpoint da sua API"
                className="w-full bg-blue-400 p-4 rounded-xl mb-4 text-center
                placeholder: text-blue-900
                placeholder: font-bold
                p-8
                placeholder:text-x1"
                />
      </div>
    </div>

    );
}