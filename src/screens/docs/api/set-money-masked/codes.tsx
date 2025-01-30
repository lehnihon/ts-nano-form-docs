export const setMoneyMaskedCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { setMoneyMasked } = field("name");
setMoneyMasked("123456");`;
