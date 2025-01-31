export const nanoFormCode = `import NanoForm, { MapOptions } from "ts-nano-form";

const moneyOptions = {
  thousands: ".",
  decimal: ",",
  precision: 2,
  beforeMask: (value) => (value === "1000" ? "1001" : value),
  afterMask: (value) => "$" + value,
};

const maskOptions = {
  map: new Map<string, MapOptions>([["#", { pattern: /[A-Za-z]/ }]]),
  beforeMask: (value) => (value === "hello" ? "helloworld" : value),
  afterMask: (value) => (value.length > 10 ? value.slice(0, -1) : value),
};

const TsNanoForm = NanoForm(params: {
    maskOptions,
    moneyOptions,
  });
`;
