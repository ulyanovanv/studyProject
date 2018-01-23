import React from "react";

export class Headings extends React.Component {
  render() {
    return (
      <header className="headers">
        <div className="headers_container">
          <div className="headers__lines"></div>
          <div className="headers__rombs"></div>
          <div className="headers__current-heading">
            {this.props.headerName}
          </div>
          <div className="headers__rombs"></div>
          <div className="headers__lines"></div>
        </div>
      </header>
    );
  }
}