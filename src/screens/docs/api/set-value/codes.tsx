export const setValueCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { setValue } = field("name");
setValue("John Doe");`;
