export const subscribeErrorCode = `import { FormUser } from "./FormUser";

const { field } = FormUser;
const { subscribeError } = field("name");

subscribeError((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
