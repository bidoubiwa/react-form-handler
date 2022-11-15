import React, { useState } from 'react'
import "./FormInput.css"

type FormInputProps = {
  id: number,
  name: string
  type: string
  placeholder: string
  label: string
  value: string
  errorMessage?: string
  pattern?: string,
  required?: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const FormInput = (props: FormInputProps) => {
  const [focused, setFocused] = useState(false);

  const {
    id,
    label,
    onChange,
    errorMessage,
    pattern,
    required,
    ...inputProps
  } = props

  const handleFocus = (e: any) => {
    setFocused(true);
  };


  return (
    <div className="formInput">
      <label >{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      // focused={focused.toString()}
      />
      <span>{errorMessage}</span>

    </div>
  )
}


export default FormInput
