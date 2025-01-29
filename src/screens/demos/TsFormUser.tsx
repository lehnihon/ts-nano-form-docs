/* eslint-disable @typescript-eslint/no-explicit-any */
import createForm from "ts-nano-form";

const resolver = (data: any) => {
  const errors = {
    name: "",
    document: "",
  };
  if (!data.name) errors.name = "name required";
  if (!data.document) errors.document = "document required";

  return errors;
};

const TsFormUser = createForm({
  resolver,
});

export default TsFormUser;
