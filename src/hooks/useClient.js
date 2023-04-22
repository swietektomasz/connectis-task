import { useEffect, useState } from "react";
import { getClients } from "@/client";

export const useClient = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then((res) => setClients(res));
  }, []);

  return { clients };
};
