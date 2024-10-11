export const setMaskedCode = `import { FormUser } from "./FormUser";

const { field } = FormUser;
const { setMasked } = field("name");
setMasked("123456", "000-000");
`;
