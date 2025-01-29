export const reactInputCode = `import { useSyncExternalStore } from "react";
import FormUser from "./createFormUser";

interface InputTextProps {
  field: string;
}

const InputText = ({ field }: InputTextProps) => {
  const { subscribeValue, getValue, subscribeError, getError, setValue } =
    FormUser.field(field);

  const value = useSyncExternalStore(subscribeValue, getValue);
  const error = useSyncExternalStore(subscribeError, getError);

  return (
    <>
      <label>{field}</label>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{error}</p>
    </>
  );
};

export default InputText;`;

export const reactFormCode = `import InputText from "./InputText";
import FormUser, { FormUserFields } from "./createFormUser";

function Form() {
  const { submit } = FormUser;

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit((data) => console.log("submit", data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText field="name" />
      <InputText field="document" />
      <p>
        <input type="submit" value="Enviar" />
      </p>
    </form>
  );
}

export default Form;`;
