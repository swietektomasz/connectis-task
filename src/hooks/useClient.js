import { useEffect, useState } from "react";
import { getClients } from "@/client";

export const useClient = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const mapClients = (transactions) => {
    const mappedTransactions = new Map();

    transactions.map(({ id, name, amount }) => {
      if (mappedTransactions.has(name)) {
        mappedTransactions.set(name, [
          ...mappedTransactions.get(name),
          { id, amount },
        ]);
      } else {
        mappedTransactions.set(name, [{ id, amount }]);
      }
    });

    setLoading(false);

    setClients(mappedTransactions);
  };

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      await getClients().then((res) => mapClients(res));
    };

    fetchClients();
  }, []);

  return { clients, loading, mapClients };
};
