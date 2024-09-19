import React, { useState, useCallback } from "react";
import Input from "./Inputs";
import SelectCategory from "./SelectCategory";
import Models from "./Models";

function Form({ setExpenses }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleSetTitle = useCallback(
    (value) => {
      setTitle(value);
    },
    [setTitle]
  );

  const handleSetCategory = useCallback(
    (value) => {
      setCategory(value);
    },
    [setCategory]
  );

  const handleSetAmount = useCallback(
    (value) => {
      setAmount(value);
    },
    [setAmount]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { title, category, amount, id: crypto.randomUUID() };
    setExpenses((prev) => [...prev, expense]);
    title && category && amount && setIsModelOpen(true);
    setTitle("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className=" flex justify-center font-serif ">
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          label="Title"
          name="title"
          type="text"
          value={title}
          onchange={handleSetTitle}
        />

        <SelectCategory
          label="Category"
          name="category"
          value={category}
          onchange={handleSetCategory}
          defautCategory="Select Category"
          selectOptions={[
            "Grocery",
            "Education",
            "Electronics",
            "Bill",
            "Other",
          ]}
        />

        <Input
          label="Amount"
          name="amount"
          type="number"
          value={amount}
          onchange={handleSetAmount}
        />

        <div>
          <button className="border-2 border-gray-300 sm:w-[40vw] w-[85vw] bg-[#319795] hover:bg-[#2C7A7B] text-white text-xl">
            Add
          </button>
          <Models isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
        </div>
      </form>
    </div>
  );
}

export default Form;
