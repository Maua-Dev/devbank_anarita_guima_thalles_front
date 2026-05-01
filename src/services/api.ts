export type AccountResponse = {
  balance: number;
};

//validação da url da api
export async function getAccount(apiUrl: string): Promise<{ balance: number }> {
    const response = await fetch(`${apiUrl}`);
    if(!response.ok) throw new Error("Desculpe! Ocorreu um erro ao buscar a conta!");
    return response.json();
}

//validação do depósito com método POST
export async function deposit(apiUrl: string, value: number): Promise<void> {
  const response = await fetch(`${apiUrl}/deposit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value }),
  });
  if (!response.ok) throw new Error("Desculpe! Ocorreu um erro ao depositar!");
  return response.json();
}

//validação do saque com método POST
export async function withdraw(apiUrl: string, value: number): Promise<void> {
  const response = await fetch(`${apiUrl}/withdraw`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value }),
  });
  if (!response.ok) throw new Error("Desculpe! Ocorreu um erro ao sacar!");
  return response.json();
}

//buscar histórico
export async function getHistory(apiUrl: string): Promise<any[]> {
  const response = await fetch(`${apiUrl}/history`);
  if (!response.ok) throw new Error("Desculpe! Ocorreu um erro ao buscar histórico!");
  return response.json();
}