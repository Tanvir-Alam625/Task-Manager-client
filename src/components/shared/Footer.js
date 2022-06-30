import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="my-12 flex justify-center ">
      <p>Copyright &copy; {year} Task Manager</p>
    </div>
  );
};

export default Footer;
