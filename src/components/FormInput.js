import { useState } from "react";
import "./FormInput.css";


const Form = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="Form">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onSubmit={()=> 
        inputProps.name === "Form Submitted" 
      }
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
  
};

export default Form;