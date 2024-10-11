export const subscribeValueCode = `import { FormUser } from "./FormUser";

const { field } = FormUser;
const { subscribeValue } = field("name");

subscribeValue((value: string, prevValue: string) =>
  console.log(value, prevValue)
);`;
