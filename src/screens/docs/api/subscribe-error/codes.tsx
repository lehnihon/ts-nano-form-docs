export const subscribeErrorCode = `import TsNanoForm from "./nanoForm";

const formUser = TsNanoForm.getForm("user");
const { field } = formUser;
const { subscribeError } = field("name");

subscribeError((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
