export const installCode = `npm install ts-nano-form`;
export const formUserCode = `import NanoForm from "ts-nano-form";

type FormUserType = {
  name: string;
  document: string;
};

const resolver = (values: FormUserType) => {
  const errors = {} as FormUserType;
  if (!values.name) errors.name = "name required";
  if (!values.document) errors.document = "document required";

  return errors;
};

const TsNanoForm = NanoForm();

const FormUser = TsNanoForm.createForm<FormUserType>({ resolver });

const { submit, field, getErrors } = FormUser;

field("name").setValue("John Doe");

submit((data) => {
  console.log("FETCH", data);
});

console.log(getErrors());
// {name: '', document: 'document required'}`;
