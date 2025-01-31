export const createEmitCode = `import { createStore } from "ts-nano-form";

const store = createStore();
store.subscribe((value, prev) => console.log(value, prev));
store.emit("test 1", "test 2");
// test 1 test 2
`;
