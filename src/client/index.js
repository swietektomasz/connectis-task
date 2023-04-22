const SERVER_URL = "http://localhost:3000";

export const getClients = async () => {
  const response = await fetch(`${SERVER_URL}/transactions`);
  const data = await response.json();
  return data;
};
