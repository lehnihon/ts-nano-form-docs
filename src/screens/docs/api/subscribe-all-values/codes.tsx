export const subscribeAllValuesCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { subscribeAllValues } = formUser;

subscribeAllValues((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
