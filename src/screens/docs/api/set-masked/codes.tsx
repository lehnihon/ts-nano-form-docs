export const setMaskedCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { setMasked } = field("name");
setMasked("123456", "000-000");
`;
