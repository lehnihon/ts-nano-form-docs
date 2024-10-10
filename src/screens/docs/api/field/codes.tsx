export const fieldCode = `import { FormUserFields, FormUser } from "./FormUser";

const { field } = FormUser;
const { setMasked } = field("document");

setMasked("123456", "000-000");`;
