import React from "react";

const MainLayout = ({ children, className = "" }) => {
  let classNames = ["container", className].join(" ");

  return (
    <>
      <div className={classNames}>{children}</div>
    </>
  );
};

export default MainLayout;
