export const subscribeAllValuesCode = `import { FormUser } from "./FormUser";

const { subscribeAllValues } = FormUser;

subscribeAllValues((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
