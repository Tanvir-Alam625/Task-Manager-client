import React from "react";

const AddedCompleteTask = ({ task }) => {
  return (
    <div className=" w-full lg:max-w-[600px] text-white flex justify-between  mb-4  border-b-2 border-secondary">
      <div class="form-control ">
        <label class="cursor-pointer label">
          <input
            type="checkbox"
            name="addedTask"
            checked={task.check ? "checked" : ""}
            disabled={task.check && true}
            class="checkbox checkbox-secondary"
          />
          <span class="label-text ml-2 text-white">{<>{task?.text}</>}</span>
        </label>
      </div>
    </div>
  );
};

export default AddedCompleteTask;
