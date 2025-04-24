import React, { forwardRef } from "react";

interface inputProps {
  name: string;
  label: string;
  type: string;
  placeHolder: string;
}

export type inputRef = HTMLInputElement;

const CustomInput = forwardRef<inputRef, inputProps>(function CustomInput(
  props,
  ref
) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-3">
      <label className="font-medium" htmlFor={props.name}>
        {props.label} :
      </label>
      <input
        className="w-full transition-colors duration-300 border rounded-xl font-medium p-2 outline-none focus:border-primary"
        type={props.type}
        name={props.name}
        ref={ref}
        placeholder={props.placeHolder}
      />
    </div>
  );
});

export default CustomInput;
