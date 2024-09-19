import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

function Table({ expenses, setExpenses }) {
  const [selectCategory, setSelectCategory] = useState("");
  const [menuPostion, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState();
  const [contentEdit, setContentEdit] = useState(false);
  const [sortCalback, setSortCallback] = useState(() => () => {});

  return (
    <div className="flex justify-center px-4 py-4 overflow-x-auto">
      <ContextMenu
        menuPosition={menuPostion}
        setContentEdit={setContentEdit}
        setMenuPosition={setMenuPosition}
        rowId={rowId}
        setExpenses={setExpenses}
      />
      <table className=" min-w-full border border-gray-300 table-auto text-sm md:text-lg">
        <thead>
          <tr
            className="bg-[#F2F2F2] text-[#2D2D2D]"
            onClick={() => setMenuPosition({})}
          >
            <th className="border  border-gray-300 px-4 py-2">Title</th>

            <th className="border border-gray-300 ">
              <select
                name="category"
                onChange={(e) => setSelectCategory(e.target.value)}
                className="bg-[#F2F2F2] outline-none focus:border-black"
              >
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Bill">Bill</option>
                <option value="Electronics">Electronics</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </th>

            <th className="border border-gray-300 flex justify-center items-center px-4 py-2">
              Amount
              <svg
                className="h-6 text-black hover:cursor-pointer"
                onClick={() =>
                  setSortCallback(() => (a, b) => a.amount - b.amount)
                }
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="12" y1="5" x2="12" y2="19" />{" "}
                <line x1="16" y1="9" x2="12" y2="5" />{" "}
                <line x1="8" y1="9" x2="12" y2="5" />
              </svg>
              <svg
                className="h-6 text-black hover:cursor-pointer"
                onClick={() =>
                  setSortCallback(() => (a, b) => b.amount - a.amount)
                }
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="12" y1="5" x2="12" y2="19" />{" "}
                <line x1="16" y1="15" x2="12" y2="19" />{" "}
                <line x1="8" y1="15" x2="12" y2="19" />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .filter(
              ({ category }) =>
                selectCategory === "" ||
                selectCategory.toLowerCase() === category.toLowerCase()
            )
            .sort(sortCalback)
            .map(({ id, title, category, amount }) => (
              <tr
                className="text-center hover:bg-[#E2E8F0]"
                key={id}
                contentEditable={contentEdit}
                suppressContentEditableWarning={true}
                onClick={(e) => {
                  setMenuPosition({ left: e.clientX + 15, top: e.clientY + 4 });
                  setRowId(id);
                }}
              >
                <td className="border border-gray-300 md:px-4 py-2">{title}</td>
                <td className="border border-gray-300 md:px-4 py-2">
                  {category}
                </td>
                <td className="border border-gray-300 md:px-4 py-2">
                  ${amount}
                </td>
              </tr>
            ))}

          <tr className="text-center" onClick={() => setMenuPosition({})}>
            <td className="border border-gray-300 px-10 py-2 font-bold">
              Total
            </td>
            <td
              className="border border-gray-300 px-10 py-2 font-bold hover:cursor-pointer"
              onClick={() => setSortCallback(() => {})}
            >
              Clear Sort
            </td>
            <td className="border border-gray-300 px-4 py-2 font-bold">
              $
              {expenses
                .filter(
                  ({ category }) =>
                    selectCategory === "" ||
                    selectCategory.toLowerCase() === category.toLowerCase()
                )
                .reduce((total, { amount }) => total + amount, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
