export const vanillaHtmlCode = `<form class="form">
  <input type="text" class="name" />
  <input type="submit" value="submit" />
</form>`;

export const vanillaTsCode = `import NanoForm from "ts-nano-form";

type FormUserType = {
  name: string;
};

const resolver = (data: any) => {
  const errors = {
    name: "",
  };
  if (!data.name) errors.name = "name required";

  return errors;
};

const TsNanoForm = NanoForm();

const FormUser = TsNanoForm.createForm<FormUserType>({ name: "form-user", resolver });

const { field, submit } = FormUser;

const nameInput = document.querySelector<HTMLInputElement>(".name");
if (nameInput)
  nameInput.addEventListener("input", function (e) {
    if (e.target instanceof HTMLInputElement)
      nameInput.value = field("name").setValue(e.target.value);
  });

const form = document.querySelector<HTMLFormElement>(".form");
if (form)
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submit((data) => console.log("submit", data));
  });`;
