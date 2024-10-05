import Highlight from "@/components/Highlight";
import React from "react";

export default function QuickStart() {
  const installCode = `npm install ts-nano-form`;
  const createFormCode = `import createForm from "ts-nano-form";

type FormUserType = {
  name: string;
  document: string;
};

export const FormUserFields = {
  name: "",
  document: "",
};

export const FormUser = createForm<FormUserType>();`;
  const maskCode = `import { FormUser } from "./FormUser";

const { field } = FormUser;
const { getValue, getError, setValue, setMasked, setMoneyMasked } =
  field("name");

setValue("123456");
getValue();
//123456

setMasked("123456", "000-000");
getValue();
//123-456

setMoneyMasked("12346");
getValue();
//1.234,56`;
  const submitCode = `import { FormUser, FormUserFields } from "./FormUser";

const { submit, field } = FormUser;
const { getError } = field("name");

submit((data) => {
  let errors = { ...FormUserFields };
  if (!data.name) errors.name = "name required";
  if (!data.document) errors.document = "document required";
  //check for errors
  if (JSON.stringify(errors) === JSON.stringify(FormUserFields))
    console.log("send data", data);

  return errors;
});

getError();
//'name required' if it is empty`;

  return (
    <>
      <section id="introduction">
        <h2 className="text-3xl font-bold">Quick Start</h2>
        <p className="mt-4 text-muted-foreground">
          To get started, follow these simple steps to install and integrate the
          library into your project.
        </p>
        <div>
          <h3 className="mt-2 mb-2 text-xl font-semibold">Install via npm</h3>
          <Highlight code={installCode} />
        </div>
      </section>
      <section id="key-concepts">
        <h2 className="text-3xl font-bold">Example</h2>
        <div className="mt-4 grid gap-8">
          <div>
            <p className="mt-2 text-muted-foreground">
              For each form, create a component with the createForm method.
            </p>
            <Highlight code={createFormCode} />

            <p className="mt-2 text-muted-foreground">
              Values ​​and errors are accessed by get methods getValue and
              getError. To apply masks use setMasked or setMoneyMasked.
            </p>

            <Highlight code={maskCode} />

            <p className="mt-2 text-muted-foreground">
              The submit method validates and returns errors.
            </p>

            <Highlight code={submitCode} />
          </div>
        </div>
      </section>
    </>
  );
}
