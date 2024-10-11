export const submitCode = `import { FormUser } from "./FormUser";

const { submit } = FormUser;

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

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  submit(fetcher);
};`;
