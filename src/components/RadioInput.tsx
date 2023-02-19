import React from "react";

interface ArgType {
  label: string;
  value: string;
  checked: string | undefined;
  setter: any;
}

function RadioInput({ label, value, checked, setter }: ArgType) {
  return (
    <label className="px-2.5">
      <input type="radio" checked={checked === value} onChange={() => setter(value)} />
      <span className="px-2.5">{label}</span>
    </label>
  );
}

export default RadioInput;
