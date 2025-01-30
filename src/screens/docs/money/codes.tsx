export const moneyCode = `import TsNanoForm from "./nanoForm";

const { getForm } = TsNanoForm
const formUser = getForm("user");
const { field } = formUser;
const {
  setMoney,
  setMoneyMasked,
  getMoneyMasked,
  getMoneyUnmasked,
} = field("document");

setMoney("123456");
getMoneyMasked();
//1.234,56
getValue();
//123456

setMoneyMasked("345678");
getValue();
//3.456,78

getMoneyUnmasked();
//3456.78`;
