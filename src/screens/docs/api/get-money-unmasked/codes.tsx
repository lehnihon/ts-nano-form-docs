export const getMoneyUnmaskedCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { getMoneyUnmasked } = field("name");
getMoneyUnmasked();`;
