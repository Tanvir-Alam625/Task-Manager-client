import React from "react";

const ToDo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    console.log(task);
  };
  return (
    <div className="min-h-[400px] ">
      <h2 className="text-center text-5xl my-6 font-extralight">Add Task </h2>
      <div className="input-task-group flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Type Your Task"
            className="py-2 px-4 border-2 text-neutral outline-0 w-[400px] border-secondary rounded-l-md"
          />
          <button className="py-2  border-2 border-secondary px-4 bg-secondary rounded-r-md">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToDo;
