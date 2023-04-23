import * as data from "@/assets/db.json";

const returnWithTimeout = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const getClients = async () => {
  await returnWithTimeout(1000);
  return data.transactions;
};
