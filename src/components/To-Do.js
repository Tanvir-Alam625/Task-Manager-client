import React from "react";
import AddedToDo from "./AddedToDo";
import { useQuery } from "react-query";
const ToDo = () => {
  const { data, isLoading, error, refetch } = useQuery("QueryTask", () =>
    fetch("http://localhost:5000/allTask").then((res) => res.json())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskValue = event.target.task.value;
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: taskValue, check: false }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    refetch();
    event.target.reset();
  };

  if (isLoading) {
    return <h2 className="text-center text-2xl">Loading data...</h2>;
  }
  if (error) {
    return <h2 className="text-2xl text-center">{error.message}</h2>;
  }
  return (
    <div className="min-h-[400px] px-2 ">
      <h2 className="text-center text-5xl my-6 font-extralight">Add Task </h2>
      <div className="input-task-group flex justify-center mb-12">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            onChange={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="Type Your Task"
            className="py-2 px-4 border-2 text-neutral outline-0  lg:w-[400px] border-secondary rounded-l-md"
          />
          <button className="py-2  border-2 border-secondary px-4 bg-secondary rounded-r-md">
            Add
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col">
        {data?.map((task) => (
          <AddedToDo task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default ToDo;
