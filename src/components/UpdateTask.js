import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "./shared/ErrorMessage";
import Spinner from "./shared/Spinner";

const UpdateTask = () => {
  const [spinner, setSpinner] = useState(false);
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskValue = event.target.task.value;
    setSpinner(true);
    if (taskValue.length < 10) {
      setInputError(true);
      setSpinner(false);
      return;
    }
    setInputError(false);
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: taskValue }),
    })
      .then((res) => res.json())
      .then((result) => {
        setSpinner(false);
        navigate("/");
      });
  };
  return (
    <div className="min-h-[400px] flex flex-col justify-center items-center">
      <div className="spinner h-[80px]">
        {spinner && <Spinner />}
        {inputError && <ErrorMessage />}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          required
          disabled={spinner && true}
          onChange={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="Type Your Task"
          className="py-2 px-4 border-2 text-neutral outline-0  lg:w-[400px] border-secondary rounded-l-md"
        />
        <button
          disabled={spinner && true}
          className="py-2  border-2 border-secondary px-4 bg-secondary rounded-r-md"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
