export const subscribeAllErrorsCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { subscribeAllErrors } = formUser;

subscribeAllErrors((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
