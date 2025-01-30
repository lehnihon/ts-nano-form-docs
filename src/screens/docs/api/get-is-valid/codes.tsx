export const getIsValidCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { getIsValid } = formUser;
getIsValid();`;
