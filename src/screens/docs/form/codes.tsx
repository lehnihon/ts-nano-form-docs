export const formCode = `import NanoForm from "ts-nano-form";

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

export const FormUser = TsNanoForm.createForm<FormUserType>({ name: "form-user", resolver });

const { submit, field } = FormUser;

field("name").setValue("John Doe");

submit((data) => {
  console.log("FETCH", data);
});

console.log(field("document").getError());
// document required`;

export const fieldCode = `import { FormUser } from "./FormUser";

const { submit, field } = FormUser;

field("name").setValue("John Doe");
field("document").setMasked("123456", "000-000");

submit((data) => {
  console.log("FETCH", data);
});
// FETCH {name: 'John Doe', document: '123-456'}`;

export const submitCode = `import { FormUser } from "./FormUser";

const { submit, field } = FormUser;

field("name").setValue("John Doe");
field("document").setMasked("123456", "000-000");

const fetcher = async (data) => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
   body: JSON.stringify(data),
    });
  } catch (e) {
      console.log(e);
  }
}

submit(fetcher);
`;
