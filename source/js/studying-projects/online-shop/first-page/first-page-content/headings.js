import React from "react";

export default function Headings(props) {
  return (
    <header className="headers">
      <div className="d-flex flex-row justify-content-between align-items-center py-3">
        <div className="headers__lines w-25"></div>
        <div className="headers__rombs d-none d-sm-flex"></div>
        <div className="headers__current-heading">
          {props.headerName}
        </div>
        <div className="headers__rombs d-none d-sm-flex"></div>
        <div className="headers__lines w-25"></div>
      </div>
    </header>
  );
}
/*TODO: write a universal styles for rombs, only to pass the color*/