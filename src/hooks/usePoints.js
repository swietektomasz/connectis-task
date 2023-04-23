import { LOWER_POINT_THRESHOLD } from "@/constants";
import { UPPER_POINT_THRESHOLD } from "../constants";

export const usePoints = (transactions) => {
  const points = transactions.reduce((points, { amount }) => {
    const value = parseFloat(amount.slice(1));
    if (value > LOWER_POINT_THRESHOLD) points += value - LOWER_POINT_THRESHOLD;
    if (value > UPPER_POINT_THRESHOLD)
      points += (value - UPPER_POINT_THRESHOLD) * 2;
    return points;
  }, 0);

  return Math.floor(points);
};
