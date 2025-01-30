export const setRulesMaskCode = `import TsNanoForm from "./nanoForm";

const maskOptions = {
  map: new Map<string, MapOptions>([["9", { pattern: /\d/ }]]),
};

const { setRulesMask } = TsNanoForm;
setRulesMask(maskOptions);`;
