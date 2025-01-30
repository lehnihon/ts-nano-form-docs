export const createFormCode = `import TsNanoForm from "./nanoForm";

const resolver = (values: FormUserType) => {
  const errors = {} as FormUserType;
  if (!values.name) errors.name = "name required";
  if (!values.document) errors.document = "document required";

  return errors;
};

const { createForm } = TsNanoForm;
const loginForm = createForm<FormLogin>({
  name: "login",
  resolver,
});
`;
