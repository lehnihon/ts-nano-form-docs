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

const TsNanoForm = NanoForm(params: {
    maskOptions,
    moneyOptions,
  });

export const FormUser = TsNanoForm.createForm<FormUserType>({
  initialValues: FormUserFields
});
`;

export const optionTypeCode = `export type NanoFormType = {
  mask: (
    value: string,
    maskRule: string | string[],
    maskOptions?: MaskOptions
  ) => string;
  unmask: (value: string, maskOptions?: MaskOptions) => string;
  maskMoney: (value: string, moneyOptions?: MoneyOptions) => string;
  unmaskMoney: (value: string, moneyOptions?: MoneyOptions) => string;
  getPlaceholder: (value: string, maskOptions?: MaskOptions) => string;
  createForm: CreateFormRef;
  getForm: (name: string) => CreateFormType<any>;
};

export type NanoFormProps = {
  maskOptions?: MaskOptions;
  moneyOptions?: MoneyOptions;
};

export type CreateFormRef = <T>(params: {
  name: string;
  initialValues?: T;
  resolver?: (values: T) => Record<string, any> | undefined;
}) => CreateFormType<T>;

export type CreateFormType<T> = {
  name: string;
  getIsValid: () => boolean;
  getValues: () => T;
  getErrors: () => T;
  subscribeAllValues: (
    listener: (value: any, prevValue: any) => void
  ) => Record<string, any>;
  subscribeAllErrors: (
    listener: (value: any, prevValue: any) => void
  ) => Record<string, any>;
  reset: (values: Record<string, any>) => void;
  field: (name: string) => Field;
  submit: (fetcher: (values: T) => void) => void;
};

export type CreateFormProps<T> = {
  name: string;
  initialValues?: T;
  resolver?: (values: T) => Record<string, any> | undefined;
  options: {
    maskOptions: MaskOptions;
    moneyOptions: MoneyOptions;
  };
};

export type Field = {
  getValue: () => any;
  getMasked: (maskRule: string | string[]) => string;
  getUnmasked: () => string;
  getMoneyMasked: () => string;
  getMoneyUnmasked: () => string;
  getError: () => string;
  setError: (value: string) => string;
  setValue: (value: any) => any;
  setMasked: (value: string, maskRule: string | string[]) => string;
  setMoney: (value: string) => string;
  setMoneyMasked: (value: string) => string;
  subscribeValue: (
    listener: (value: any, prevValue: any) => void
  ) => () => void;
  subscribeError: (
    listener: (value: any, prevValue: any) => void
  ) => () => void;
};

export type Store = {
  subscribe: (listener: (value: any, prevValue: any) => void) => () => void;
  emit: (value: any, prevValue: any) => void;
  get: () => any;
  set: (newValue: any) => void;
};

export type FormOptions = {
  test: string;
};

export type MaskOptions = {
  map: Map<string, MapOptions>;
  beforeMask?: (value: string) => string;
  afterMask?: (value: string) => string;
};

export type MoneyOptions = {
  thousands: string;
  decimal: string;
  precision: number;
  prefix?: string;
  allowNegative?: boolean;
  beforeMask?: (value: string) => string;
  afterMask?: (value: string) => string;
};

export type MapOptions = {
  pattern: RegExp;
  transform?: (
    prevValue: string,
    newChar: string
  ) => { prevValue: string; newChar: string };
};
`;

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

export const optionBeforeCode = `import NanoForm, { MapOptions } from "ts-nano-form";

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

const TsNanoForm = NanoForm(params: {
    maskOptions,
    moneyOptions,
  });

const FormUser = TsNanoForm.createForm<FormUserType>({
  initialValues: FormUserFields,
});

const { mask, maskMoney } = FormUser;

mask("hello", "###########");
//return helloworld

maskMoney("1000");
//return $10,00`;
