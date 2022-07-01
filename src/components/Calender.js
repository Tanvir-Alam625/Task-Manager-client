import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate.toDateString());
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-serif center my-8">Calender</h2>
      <div className="relative">
        <DatePicker
          className="text-neutral text-xl py-2 px-4 border-2 border-secondary rounded-md outline-none"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default Calender;
