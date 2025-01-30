export const getMoneyMaskedCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { getMoneyMasked } = field("name");
getMoneyMasked();`;
