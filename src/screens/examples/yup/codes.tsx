export const yupCode = `import NanoForm from "ts-nano-form";
import { AnyObject, ObjectSchema, ValidationError } from "yup";

const validateYup = <T>(data: T, schema: ObjectSchema<AnyObject>) => {
  let errors = { ...data };
  try {
    schema.validateSync(data, { abortEarly: false });
  } catch (e) {
    if (e instanceof ValidationError) {
      errors = e.inner.reduce((acc: any, error) => {
        acc[error.path!] = error.message;
        return acc;
      }, {} as T);
    }

    return errors;
  }
};

const formSchema = object({
  name: string().required(),
});

type FormUser = InferType<typeof formSchema>;

const TsNanoForm = NanoForm();

const TsForm = TsNanoForm.createForm<FormUser>({
  name: "form-user",
  resolver: validateYup(formSchema),
});`;
