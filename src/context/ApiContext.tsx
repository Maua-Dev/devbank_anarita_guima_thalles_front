//guardando url da api usando react
import { createContext, useState, ReactNode } from "react";

type ApiContextType = {
  apiUrl: string;
  setApiUrl: (url: string) => void;
};

export const ApiContext = createContext<ApiContextType>({
  apiUrl: "",
  setApiUrl: () => {},
});

export function ApiProvider({ children }: { children: ReactNode }) {
  const [apiUrl, setApiUrl] = useState<string>("");

  return (
    <ApiContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </ApiContext.Provider>
  );
}