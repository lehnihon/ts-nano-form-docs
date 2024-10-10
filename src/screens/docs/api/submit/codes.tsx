export const submitCode = `import { FormUserFields, FormUser } from "./FormUser";

const { submit } = FormUser;

const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();
  submit((data) => {
    const errors = { ...FormUserFields };
    if (!data.name) errors.name = "name required";
    //check for errors
    if (JSON.stringify(errors) === JSON.stringify(TsFormUserInitalValues))
      console.log("send data", data);

    return errors;
  });
};`;
