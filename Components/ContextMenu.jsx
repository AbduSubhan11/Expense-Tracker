import React, { useState } from "react";

function ContextMenu({
  menuPosition,
  setMenuPosition,
  setContentEdit,
  rowId,
  setExpenses,
}) {
  const [currentRowId, setCurrentRowId] = useState(null);
  if (!menuPosition.left) return;

  return (
    <div
      className="absolute bg-gray-200 border border-gray-400 p-1"
      style={{ ...menuPosition }}
    >
      <div
        className="hover:bg-slate-300 hover:cursor-pointer pl-2"
        onClick={() => {
          setMenuPosition({});

          if (currentRowId !== rowId) {
            setContentEdit(true);
            setCurrentRowId(rowId);
          } else {
            setContentEdit(false);
            setCurrentRowId(null);
          }
        }}
      >
        Edit
      </div>
      <div
        className="hover:bg-slate-300 hover:cursor-pointer pl-2"
        onClick={() => {
          setMenuPosition({});
          {
            setExpenses((prev) =>
              prev.filter((expense) => expense.id !== rowId)
            );
          }
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default ContextMenu;
