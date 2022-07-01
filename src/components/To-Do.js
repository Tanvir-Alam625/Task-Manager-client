import React, { useState } from "react";
import AddedToDo from "./AddedToDo";
import { useQuery } from "react-query";
import Spinner from "./shared/Spinner";
import ErrorMessage from "./shared/ErrorMessage";
const ToDo = () => {
  const [spinner, setSpinner] = useState(false);
  const [inputError, setInputError] = useState(false);
  // get all task data
  const { data, isLoading, error, refetch } = useQuery("QueryTask", () =>
    fetch("http://localhost:5000/allTask").then((res) => res.json())
  );
  const reverseData = data?.reverse();
  // add a new task
  const handleSubmit = (event) => {
    event.preventDefault();
    setSpinner(true);
    const taskValue = event.target.task.value;
    // validation
    if (taskValue.length < 10) {
      setInputError(true);
      setSpinner(false);
      return;
    }
    setInputError(false);
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: taskValue, check: false }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        refetch();
        setSpinner(false);
      });
    event.target.reset();
  };

  if (isLoading) {
    return <h2 className="text-center text-2xl">Loading data...</h2>;
  }
  if (error) {
    return <h2 className="text-2xl text-center">{error.message}</h2>;
  }
  return (
    <div className="min-h-[400px] px-2p pt-4 ">
      <div className="message h-[80px]">
        {spinner && <Spinner />}
        {inputError && <ErrorMessage />}
      </div>
      <h2 className="text-center text-5xl mb-6 lg:mt-12 mt-8  font-extralight">
        Add Task{" "}
      </h2>
      <div className="input-task-group flex justify-center mb-12">
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
            Add
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col">
        {reverseData?.map((task) => (
          <AddedToDo
            task={task}
            key={task._id}
            spinner={spinner}
            refetch={refetch}
            setSpinner={setSpinner}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDo;
