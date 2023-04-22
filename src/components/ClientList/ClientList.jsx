import { useClient } from "@/hooks/useClient";

export const ClientList = () => {
  const { clients } = useClient();

  return (
    <div>
      {clients.map(({ name, id }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};
