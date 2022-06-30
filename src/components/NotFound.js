import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl  font-extraBold ">Oops! 404</h1>
      <h2 className="my-4">This Page is Not Found</h2>
      <Link className="btn btn-primary" to="/">
        Got Back Home
      </Link>
    </div>
  );
};

export default NotFound;
