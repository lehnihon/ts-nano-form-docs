export const setErrorCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { setError } = field("name");
setError("name required");`;
