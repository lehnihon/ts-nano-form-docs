export const storeCode = `import NanoForm from "ts-nano-form";

type FormUserType = {
  document: string;
};

const TsNanoForm = NanoForm();

const FormUser = TsNanoForm.createForm<FormUserType>({
  name: "form-user",
  initialValues: {
    document: "12345",
  },
});

const { subscribeValue, setValue } = FormUser.field("document");
subscribeValue((value: string, prevValue: string) =>
  console.log(value, prevValue)
);
setValue("67890");
// 67890 12345`;
