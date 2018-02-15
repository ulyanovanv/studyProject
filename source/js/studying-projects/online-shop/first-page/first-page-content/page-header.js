import React from "react";

export class PageHeader extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="page-header__upper-menu">
          <div className="to-centre">
            <div className="page-header__upper-menu_block ">
              <p>Call 0 179 3182901</p>
            </div>
            <div className="page-header__upper-menu_block ">
              <a href="/online-shop">welcome msg!</a>
            </div>
            <div className="page-header__upper-menu_block ">
              <a className="page-header__upper-menu_block_border" href="/online-shop"> my account</a>
            </div>
            <div className="page-header__upper-menu_block "
                 onClick={ this.props.onClick}
                 title="Choose the products from the summer collection before click">
              <a className="page-header__upper-menu_block_border" style={{color: "#FFF", backgroundColor: "#000"}}>my basket</a>
            </div>
            <div className="page-header__upper-menu_block ">
              <a className="page-header__upper-menu_block_border page-header__upper-menu_block_last-padding" href="/online-shop">login</a>
            </div>
          </div>
        </div>
        <div className="page-header__lower-menu">
          <div className="to-centre">
            <div className="page-header__lower-menu_block categories">
              <div className="categories__name">
                <a href="/online-shop">Home</a>
              </div>
              <div className="categories__name">
                <a href="/online-shop">Galleries</a>
              </div>
              <div className="categories__name">
                <a href="/online-shop">Categories</a>
              </div>
              <div className="categories__name">
                <a href="/online-shop">Pages</a>
              </div>
            </div>
            <div className="page-header__lower-menu_block page-name">
              <p>Spophia</p>
            </div>
            <div className="page-header__lower-menu_block right-side">
              <div className="right-side__social-nets">
                <a className="right-side__social-nets_type facebook" href="/online-shop"></a>
                <a className="right-side__social-nets_type twitter" href="/online-shop"></a>
                <a className="right-side__social-nets_type pinterest" href="/online-shop"></a>
                <a className="right-side__social-nets_type instagram" href="/online-shop"></a>
              </div>
              <div className="right-side__select-collection">
                <select>
                  <option>Bikini</option>
                  <option>Underwear</option>
                  <option>Sexy socs</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}