export const getMaskedCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { getMasked } = field("name");
getMasked("000-000");`;
