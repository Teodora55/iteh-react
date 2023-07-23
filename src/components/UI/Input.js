import React, { useRef,useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const inputRef = useRef();

  const validate = () => {
    const validInput = new RegExp(props.validator).test(inputRef.current.value);
    setValid(validInput);
    return validInput;
  };

  const changeHandler = () => {
    const validInput = validate();
    props.onChange({
      valid:validInput,
      name:props.name,
      value:inputRef.current.value
    });
  }

  return (
    <div>
      <label>{props.label}</label>{" "}
      <input
        ref={inputRef}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={() => {
          setTouched(true);
        }}
        className={!touched || valid ? "" : "invalid"}
      />
    </div>
  );
};

export default Input;
