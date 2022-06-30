import React, { useState } from "react";

const AddedToDo = () => {
  const [check, setCheck] = useState(false);
  const handleChange = (event) => {
    setCheck(event.target.checked);
  };
  return (
    <div className=" w-full lg:min-w-[400px] text-white flex justify-between    border-b-2 border-secondary">
      <div class="form-control ">
        <label class="cursor-pointer label">
          <input
            type="checkbox"
            name="addedTask"
            onChange={handleChange}
            class="checkbox checkbox-secondary"
          />
          <span class="label-text ml-2">
            {check ? (
              <del className="none">Make Responsive Website</del>
            ) : (
              <>Make Responsive Website</>
            )}
          </span>
        </label>
      </div>
      <button className="hover:text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddedToDo;
