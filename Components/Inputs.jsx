import React from "react";

function Input({ name, label, type, value, onchange }) {
  function handleChange(e) {
    const inputValue =
      type === "number" ? Number(e.target.value) : e.target.value;
    onchange(inputValue);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="sm:w-[40vw] w-full pl-2 bg-[#EAEAEA] border-2 outline-none focus:border-[#bfc1c4] "
      />
    </div>
  );
}

export default Input;
