import { useSyncExternalStore } from "react";
import TsFormUser from "./TsFormUser";

interface InputTextProps {
  field: string;
  mask?: string | string[];
}

const InputText = ({ field, mask }: InputTextProps) => {
  const {
    subscribeValue,
    subscribeError,
    getError,
    setValue,
    getValue,
    getMasked,
  } = TsFormUser.field(field);

  const value = useSyncExternalStore(
    subscribeValue,
    mask ? getMasked.bind(this, mask) : getValue
  );
  const error = useSyncExternalStore(subscribeError, getError);

  return (
    <div className="space-y-2 text-sm">
      <p>{field}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p className="text-red-400">{error}</p>
    </div>
  );
};

export default InputText;
