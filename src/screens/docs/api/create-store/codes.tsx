export const createStoreCode = `import { createStore } from "ts-nano-form";

const store = createStore();
store.subscribe((value, prev) => console.log(value, prev));
store.set("a");
`;
