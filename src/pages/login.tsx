import { useState, useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { getAccount } from '../services/api';
import { useNavigate} from 'react-router-dom';


export default function Login() {
    const [url, setUrl] = useState("");
    const { setApiUrl } = useContext(ApiContext);
    const navigate = useNavigate();

    async function handleLogin() {
    if (!url) {
        alert("Digite a URL da API");
        return;
    }

    try {
        await getAccount(url); 
        setApiUrl(url);
        navigate("/home");
    } catch {
    alert("API inválida ou fora do ar");
    }
    }
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
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Coloque aqui o endpoint da sua API"
                className="w-full bg-blue-400 p-4 rounded-xl mb-4 text-center
                placeholder: text-blue-900
                placeholder: font-bold
                p-8
                placeholder:text-x1"
                />

                <button
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white font-bold p-4 rounded-xl"
                >
                Entrar
                </button>
      </div>
    </div>

    );
}