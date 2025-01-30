export const fieldCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { setMasked } = field("document");

setMasked("123456", "000-000");`;
