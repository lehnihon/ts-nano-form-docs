export const subscribeCode = `import { createStore } from "ts-nano-form";

const store = createStore();
store.subscribe((value, prev) => console.log(value, prev));
store.set("123");
store.set("456");
// 456 123
`;
