export const getFormCode = `import TsNanoForm from "./nanoForm";

const { getForm } = TsNanoForm;
const formLogin = getForm("login");
const formUser = getForm("user");

formLogin.submit((data) => console.log("submit login", data));
`;
