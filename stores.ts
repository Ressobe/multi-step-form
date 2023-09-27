import { atom } from "nanostores";

type PlanType = "arcade" | "advanced" | "pro";

export const subscription = atom<"monthly" | "yearly">("monthly");
export const plan = atom<PlanType>("arcade");

export const setPlan = (planType: PlanType) => {
  plan.set(planType);
};

export const formFieldsStore = atom({
  name: "",
  email: "",
  phone: "",
});

export const addOns = atom(new Array(3).fill(false));

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

export const monthlyPricesAddOns: [string, number][] = [
  ["Online Service", 1],
  ["Larger Storage", 2],
  ["Customizable Profile", 2],
];

export const yearlyPricesAddOns: [string, number][] = [
  ["Online Service", 10],
  ["Larger Storage", 20],
  ["Customizable Profile", 20],
];

export const addOnsContent = [
  {
    title: "Online Service",
    description: "Access to multiplayer games",
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
  },
];

export const getTotalPrice = () => {
  let totalPrice = 0;
  const plansPrices =
    subscription.get() === "monthly" ? monthlyPricesPlans : yearlyPricesPlans;
  const addOnsPrices =
    subscription.get() === "monthly" ? monthlyPricesAddOns : yearlyPricesAddOns;

  totalPrice += plansPrices[plan.get()];
  addOns.get().map((item, idx) => {
    if (item) totalPrice += addOnsPrices[idx][1];
  });

  return totalPrice;
};
