import { useClient } from "@/hooks/useClient";
import { Points } from "@/components";

export const ClientList = () => {
  const { clients, loading } = useClient();

  const people = Array.from(clients.entries());

  if (loading) return "Loading...";

  return (
    <div>
      <h2>Clients and their points</h2>
      <div className="client-list">
        {people.map((person) => (
          <Points key={person[0]} person={person} />
        ))}
      </div>
    </div>
  );
};
