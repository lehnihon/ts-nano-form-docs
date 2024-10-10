export const maskCode = `import { FormUser } from "./FormUser";

const { mask, unmask } = FormUser;
mask("123456789", "000-000-000");
//123-456-789

unmask("123-456-789");
//123456789
`;

export const maskStoreCode = `import { FormUser } from "./FormUser";

const { field } = FormUser;
const {
  setValue,
  setMoney,
  setMasked,
  setMoneyMasked,
  getValue,
  getMasked,
  getMoneyMasked,
  getMoneyUnmasked,
} = field("document");

setValue("123456");
getMasked("000-000");
//123-456
getValue();
//123456

setMoney("123456");
getMoneyMasked();
//1.234,56
getValue();
//123456

setMasked("789012", "000-000");
getValue();
//789-012

setMoneyMasked("345678");
getValue();
//3.456,78

getMoneyUnmasked();
//3456.78
getUnmasked();
//345678`;
