import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddedToDo = ({ task, spinner, refetch, setSpinner }) => {
  const [check, setCheck] = useState(task.check);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSpinner(true);
    const checkValue = event.target.checked;
    fetch(`https://vast-mesa-60285.herokuapp.com/task/${task._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ check: checkValue }),
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
        setCheck(checkValue);
        setSpinner(false);
      });
  };
  return (
    <div className=" w-full lg:max-w-[600px] text-white flex justify-between  mb-4  border-b-2 border-secondary">
      <div class="form-control ">
        <label class="cursor-pointer label">
          <input
            type="checkbox"
            name="addedTask"
            checked={task.check ? "checked" : ""}
            disabled={task.check && true}
            onChange={handleChange}
            class="checkbox checkbox-secondary"
          />
          <span class="label-text ml-2 text-white">
            {check ? (
              <del className="none">{task?.text}</del>
            ) : (
              <>{task?.text}</>
            )}
          </span>
        </label>
      </div>
      <button
        disabled={task?.check || spinner ? true : false}
        className="hover:text-secondary"
        onClick={() => navigate(`/update/${task._id}`)}
      >
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
