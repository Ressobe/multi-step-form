import { atom } from "nanostores";

export const activeIndex = atom(0);
export const subscription = atom<"monthly" | "yearly">("monthly");
export const plan = atom<"arcade" | "advanced" | "pro">("arcade");

export const addOns = atom([false, false, false]);

export const monthlyPricesPlans = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

export const yearlyPricesPlans = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

export const monthlyPricesAddOns = [
  ["Online Service", 1],
  ["Larger Storage", 2],
  ["Customizable Profile", 2],
];

export const yearlyPricesAddOns = [
  ["Online Service", 10],
  ["Larger Storage", 20],
  ["Customizable Profile", 20],
];
