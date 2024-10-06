import { forwardRef } from "react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  inputClassName?: string;
}

const Input = forwardRef<any, InputProps>(
  (
    {
      startAdornment,
      endAdornment,
      className = "",
      inputClassName = "",
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`input-container ${className}`}>
        {startAdornment && startAdornment}
        <input
          type="text"
          ref={ref}
          {...rest}
          value={value}
          onChange={onChange}
          className={`input ${inputClassName}${
            startAdornment ? "has-start-adornment" : ""
          }`}
        />
        {endAdornment && endAdornment}
      </div>
    );
  }
);

export default Input;
