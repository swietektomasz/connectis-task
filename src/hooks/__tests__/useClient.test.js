import { renderHook, act } from "@testing-library/react-hooks";
import { describe, it, expect } from "vitest";
import { useClient } from "../useClient";

const mockClients = {
  transactions: [
    {
      id: "f0b0517c-503e-48e9-a0d6-26d8fcd0a64b",
      name: "Murdag Breckinridge",
      amount: "$132.11",
    },
    {
      id: "0e35cb26-19dc-4b20-bc0b-228adb299e51",
      name: "Roy Bowie",
      amount: "$71.66",
    },
    {
      id: "a36b6c2a-4734-479e-8cf2-67c55fbf0722",
      name: "Seaghdh Reid",
      amount: "$127.51",
    },
  ],
};

describe("useClient hook", () => {
  it("should return mapped clients", async () => {
    const { result } = renderHook(() => useClient());

    act(() => {
      result.current.mapClients(mockClients.transactions);
    });

    expect(result.current.clients.has("Murdag Breckinridge")).toBe(true);
    expect(result.current.clients.has("Roy Bowie")).toBe(true);
    expect(result.current.clients.has("Seaghdh Reid")).toBe(true);
  });
});
