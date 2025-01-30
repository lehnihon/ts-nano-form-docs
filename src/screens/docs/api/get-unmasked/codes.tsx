export const getUnmaskedCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { getUnmasked } = field("name");
getUnmasked();`;
