export const reactInputCode = `import { useSyncExternalStore } from "react";
import useNanoForm from "./useNanoForm";

interface InputTextProps {
  name: string;
}

const InputText = ({ name }: InputTextProps) => {
  const { form } = useNanoForm();
  const { subscribeValue, getValue, subscribeError, getError, setValue } =
    form.field(name);

  const value = useSyncExternalStore(subscribeValue, getValue);
  const error = useSyncExternalStore(subscribeError, getError);

  return (
    <>
      <label>{name}</label>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{error}</p>
    </>
  );
};

export default InputText;`;

export const reactFormCode = `import InputText from "./InputText";
import TsNanoForm from "./nanoForm";
import NanoFormProvider from "./nanoFormProvider";

function UserForm() {
  const formUser = TsNanoForm.getForm("user");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    formUser.submit((data) => console.log("submit", data));
  };

  return (
    <NanoFormProvider form={formUser}>
      <InputText name="name" />
      <InputText name="document" />
      <button onClick={handleSubmit}>Send</button>
    </NanoFormProvider>
  );
}
`;

export const reactFormProvider = `import { createContext, ReactNode } from "react";
import { CreateFormType } from "../lib/types";

export interface NanoFormContextType {
  form: CreateFormType<any>;
}

export const NanoFormContext = createContext<NanoFormContextType | undefined>(
  undefined
);

interface NanoFormProviderProps {
  form: CreateFormType<any>;
  children: ReactNode;
}

const NanoFormProvider = ({ form, children }: NanoFormProviderProps) => {
  return (
    <NanoFormContext.Provider value={{ form }}>
      {children}
    </NanoFormContext.Provider>
  );
};

export default NanoFormProvider;`;

export const reactFormContext = `import { useContext } from "react";
import { NanoFormContext, NanoFormContextType } from "./nanoFormProvider";

const useNanoForm = (): NanoFormContextType => {
  const context = useContext(NanoFormContext);
  if (!context) {
    throw new Error("useNanoForm must be used inside a NanoFormProvider");
  }
  return context;
};

export default useNanoForm;
`;
