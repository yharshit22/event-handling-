import React from "react";
const ButtonClick = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };
  return <button onClick={handleClick}>Click Me</button>;
};
export default ButtonClick;