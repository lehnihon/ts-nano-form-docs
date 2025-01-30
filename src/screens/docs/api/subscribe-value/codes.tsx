export const subscribeValueCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { subscribeValue } = field("name");

subscribeValue((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
