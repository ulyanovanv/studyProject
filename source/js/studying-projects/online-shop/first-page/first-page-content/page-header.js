import React from "react";

export class PageHeader extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="page-header__upper-menu">
          <div className="page-header__upper-menu_block ">
            <p>Call 0 179 3182901</p>
          </div>
          <div className="page-header__upper-menu_block ">
            <p>welcome msg!</p>
          </div>
          <div className="page-header__upper-menu_block ">
            <p className="page-header__upper-menu_block_border"> my account</p>
          </div>
          <div className="page-header__upper-menu_block ">
            <p className="page-header__upper-menu_block_border">my whistlelist</p>
          </div>
          <div className="page-header__upper-menu_block ">
            <p className="page-header__upper-menu_block_border">login</p>
          </div>
        </div>
        <div className="page-header__lower-menu">
          <div>f</div>
          <div>g</div>
          <div>h</div>
        </div>
      </header>
    )
  }
}