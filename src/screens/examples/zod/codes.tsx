export const zodCode = `import NanoForm from "ts-nano-form";
import { z } from "zod";

const validateZod = <T>(data: T, schema: z.ZodType<T>) => {
  let errors = { ...data };
  try {
    schema.parse(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      errors = e.issues.reduce((acc: any, error) => {
        acc[error.path.join(".")] = error.message;
        return acc;
      }, {} as T);
    }
    return errors;
  }
};

export const formSchema = z.object({
  name: z.string().trim().min(1),
});

type FormUser = InferType<typeof formSchema>;

const TsNanoForm = NanoForm();

const TsForm = TsNanoForm.createForm<FormUser>({
  name: "form-user",
  resolver: validateZod(formSchema),
});`;
