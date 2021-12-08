import React, { Fragment } from "react";
import spinner from "./spinner.gif";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </Fragment>
);
