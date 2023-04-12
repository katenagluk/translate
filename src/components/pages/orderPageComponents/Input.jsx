import { CustomInput } from "./Form.styles";
import { useState } from "react";
const MyInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <CustomInput
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      isFocused={isFocused}
      onFocus={() => setIsFocused((prev) => !prev)}
      onBlur={() => setIsFocused(false)}
      value={props.value}
    ></CustomInput>
  );
};
export default MyInput;
