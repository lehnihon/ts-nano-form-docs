export const getMaskedCode = `import { FormUser } from "./FormUser";

const { field } = FormUser;
const { getMasked } = field("name");
getMasked("000-000");`;
