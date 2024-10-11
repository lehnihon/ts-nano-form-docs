export const setRulesMoneyCode = `import { FormUser } from "./FormUser";

const moneyOptions = {
  thousands: " ",
  decimal: ".",
  precision: 3,
  prefix: "$",
};

const { setRulesMask } = FormUser;
setRulesMoney(moneyOptions);`;
