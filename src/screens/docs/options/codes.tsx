export const optionCode = `const moneyOptions = {
  thousands: " ",
  decimal: ".",
  precision: 3,
  prefix: "R$",
};

const maskOptions = {
  map: new Map<string, MapOptions>([
    [
      "#",
      {
        pattern: /[A-Za-z]/,
        transform: (prevValue, newChar) => ({
          prevValue,
          newChar: newChar.toLocaleUpperCase(),
        }),
      },
    ],
    ["9", { pattern: /\d/ }],
  ]),
};

export const FormUserFields = {
  document: "",
};

export const FormUser = createForm<FormUserType>({
  initialValues: FormUserFields,
  options: {
    maskOptions,
    moneyOptions,
  },
});
`;

export const optionTypeCode = `export interface CreateFormProps<T> {
  initialValues?: T;
  resolver?: (values: T) => Record<string, unknown> | undefined;
  options?: TsFormOptions;
}

export interface TsFormOptions {
  maskOptions?: MaskOptions;
  moneyOptions?: MoneyOptions;
}

export interface MaskOptions {
  map: Map<string, MapOptions>;
  beforeMask?: (value: string) => string;
  afterMask?: (value: string) => string;
}

export interface MoneyOptions {
  thousands: string;
  decimal: string;
  precision: number;
  prefix?: string;
  allowNegative?: boolean;
  beforeMask?: (value: string) => string;
  afterMask?: (value: string) => string;
}

export interface MapOptions {
  pattern: RegExp;
  transform?: (
    prevValue: string,
    newChar: string
  ) => { prevValue: string; newChar: string };
}`;

export const optionDefaultCode = `const DEFAULT_MONEY_OPTIONS = {
  thousands: ".",
  decimal: ",",
  precision: 2,
};

const DEFAULT_MASK_OPTIONS = {
  map: new Map<string, MapOptions>([
    ["0", { pattern: /\d/ }],
    ["A", { pattern: /[a-zA-Z0-9]/ }],
    ["S", { pattern: /[A-Za-z]/ }],
    [
      "X",
      {
        pattern: /[A-Za-z]/,
        transform: (prevValue, newChar) => ({
          prevValue,
          newChar: newChar.toLocaleUpperCase(),
        }),
      },
    ],
    [
      "x",
      {
        pattern: /[A-Za-z]/,
        transform: (prevValue, newChar) => ({
          prevValue,
          newChar: newChar.toLocaleLowerCase(),
        }),
      },
    ],
    [
      "Z",
      {
        pattern: /[a-zA-Z0-9]/,
        transform: (prevValue, newChar) => ({
          prevValue,
          newChar: newChar.toLocaleUpperCase(),
        }),
      },
    ],
    [
      "z",
      {
        pattern: /[a-zA-Z0-9]/,
        transform: (prevValue, newChar) => ({
          prevValue,
          newChar: newChar.toLocaleLowerCase(),
        }),
      },
    ],
  ]),
};`;

export const optionBeforeCode = `import createForm, { MapOptions } from "ts-nano-form";

type FormUserType = {
  document: string;
};

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

export const FormUserFields = {
  document: "",
};

const FormUser = createForm<FormUserType>({
  initialValues: FormUserFields,
  options: {
    maskOptions,
    moneyOptions,
  },
});

const { mask, maskMoney } = FormUser;

mask("hello", "###########");
//return helloworld

maskMoney("1000");
//return $10,00`;
