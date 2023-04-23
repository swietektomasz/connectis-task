import { useState } from "react";
import { usePoints } from "@/hooks/usePoints";

export const Points = ({ person }) => {
  const [expanded, setExpanded] = useState(false);
  const points = usePoints(person[1]);

  return (
    <div
      className={`tile ${expanded && "tile-expanded"}`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <div className="point-header">
        <p>{person[0]}</p>
        <h4>{`${points} points`}</h4>
      </div>

      {expanded && (
        <div className="transactions">
          <p>Past transactions:</p>
          {person[1].map(({ id, amount }) => (
            <div key={id}>
              <b>{`${id} - ${amount}`}</b>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
