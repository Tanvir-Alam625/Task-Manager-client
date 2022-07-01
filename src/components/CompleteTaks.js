import React from "react";
import AddedCompleteTask from "./AddedCompleteTaks";
import useTask from "./hooks/UseTask";
import Spinner from "./shared/Spinner";

const CompleteTask = () => {
  const [data, isLoading, error, refetch] = useTask();
  const checkedData = data?.filter((task) => task?.check?.check === true);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-center text-4xl font-semibold my-8">
        Completed Task
      </h2>
      {checkedData?.map((task) => (
        <AddedCompleteTask task={task} key={task._id} />
      ))}
    </div>
  );
};

export default CompleteTask;
