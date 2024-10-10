export const setRulesMaskCode = `import { FormUser } from "./FormUser";

const maskOptions = {
  map: new Map<string, MapOptions>([["9", { pattern: /\d/ }]]),
};

const { setRulesMask } = FormUser;
setRulesMask(maskOptions);`;
