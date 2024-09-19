import React from "react";
import { createPortal } from "react-dom";

function Models({ isModelOpen, setIsModelOpen }) {
  return createPortal(
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black/30 ${
        isModelOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white sm:py-10 py-2 sm:px-20 px-7 space-y-5">
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg?w=2000"
            width={110}
          />
        </div>

        <div className="flex justify-center">
          <h1 className="font-bold text-2xl text-center">
            Expense added successfully
          </h1>
        </div>

        <div className="flex justify-center ">
          <p className="text-md text-center">
            You can view it in the table below.
          </p>
        </div>

        <div className="flex justify-center ">
          <button
            className="bg-[#7CD1F9] rounded-md px-4 py-2"
            onClick={() => setIsModelOpen(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Models;
