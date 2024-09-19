import React from "react";

function SelectCategory({ label, name, value, onchange, defautCategory, selectOptions }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="category">{label}</label>

      <select
        required
        name={name}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        className="sm:w-[40vw] w-full h-7 bg-[#EAEAEA] border-2 outline-none focus:border-[#bfc1c4] "
      >
        <option value="" hidden>
          {defautCategory}
        </option>

        {
            selectOptions.map((option,i)=>{
                return <option key={i} value={option}>{option}</option>
            })
        }
        
      </select>
    </div>
  );
}

export default SelectCategory;
