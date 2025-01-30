export const setRulesMoneyCode = `import TsNanoForm from "./nanoForm";

const moneyOptions = {
  thousands: " ",
  decimal: ".",
  precision: 3,
  prefix: "$",
};

const { setRulesMask } = TsNanoForm;
setRulesMoney(moneyOptions);`;
