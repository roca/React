/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Header from "./Header";

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
