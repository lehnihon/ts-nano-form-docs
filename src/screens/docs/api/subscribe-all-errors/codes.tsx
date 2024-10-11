export const subscribeAllErrorsCode = `import { FormUser } from "./FormUser";

const { subscribeAllErrors } = FormUser;

subscribeAllErrors((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
