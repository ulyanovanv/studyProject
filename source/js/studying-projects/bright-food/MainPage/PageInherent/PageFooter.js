import React from "react";
import ScrollToTop from 'react-scroll-up';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 52.524, lng: 13.398 }}>
    {props.isMarkerShown && <Marker position={{ lat: 52.542, lng: 13.392  }} />}
  </GoogleMap>
))

let LastMenu = ["contact us","team of us","site map","privacy policy"];

export class PageFooter extends React.Component {
  renderNavigation(){
    return LastMenu.map((item) => {
      return (
        <div className="page-footer__total-footer_last-menu_item" key={item}>
          <a href="/bright-food">{item}</a>
          <div className="page-footer__total-footer_last-menu_item_green-circle"></div>
        </div>)
    })
  }

  render() {
    return <section className="page-footer">
      <div className="page-footer_grey">
        <div id="granat">
          <img src="/images/bright-food/business/granat.png"/>
        </div>

        <div id="salat">
          <img src="/images/bright-food/business/salat.png"/>
        </div>

        <div className="white-path">
          <img src="/images/bright-food/business/path.png"/>
        </div>

        <div id="icon-to-top" >
          <ScrollToTop showUnder={160}
                       duration={1000}
                       style={{
            position: 'absolute',
            bottom: 0,
            left: "49.5%",
            right: "auto",
            cursor: 'pointer',
            color: "#b5b5b5",
            fontSize: "1.3rem",
            width: "1%"
          }}>
            <i className="far fa-arrow-alt-circle-up"></i>
          </ScrollToTop>
        </div>

        <div className="page-footer_width">
          <div className="page-footer__subscribe">

            <div className="page-footer__subscribe_text">
              <div className="page-footer__subscribe_text_join">
                Join our newsletter
              </div>
              <div className="page-footer__subscribe_text_sub">
                <span>subscribe&nbsp;</span>
                <span>newsletter</span>
              </div>
            </div>
            <form method="POST" target="_blank">
              <input id="email" name="email" type="email"
                     placeholder="enter your e-mail address"
                     pattern="/^[a-zA-Z0-9\.\+\-]+@[a-zA-Z]+\.[a-zA-Z]+/"
                     autoComplete="off"
                     required/>
              <input id="subscribe" name="subscribe" type="submit" value="subscribe	&rarr;"/>
            </form>

          </div>
          <div className="page-footer__menu">

            <div className="page-footer__menu_connect">
              <div className="page-footer__menu_logo">
                <span id="logo2">Logo</span>
                <img id="leaf-for-log" src="/images/bright-food/main-image/small-leaf.png"/>
                <span> Type</span>
              </div>
              <div className="page-footer__menu_green-line"></div>
              <div className="page-footer__menu_stay-connected">
                <div className="page-footer__menu_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                </div>
                <div className="page-footer__menu_stay-connected_address">
                  <i className="fas fa-map-marker"></i>
                  <span>Voltastr 1. Berlin</span>
                </div>
                <div className="page-footer__menu_stay-connected_email">
                  <i className="far fa-envelope"></i>
                  <a href="mailto:av.ulyanova@gmail.com">av.ulyanova@gmail.com</a>
                </div>
                <div className="page-footer__menu_stay-connected_website">
                  <i className="fas fa-phone-square"></i>
                  <a href="/bright-food">www.anastasiia.ilfate.net</a>
                </div>
              </div>
            </div>

            <div className="page-footer__menu_information">
              <div className="page-footer__menu_header">
                <span>natural&nbsp;</span>
                <span>information </span>
              </div>
              <div className="page-footer__menu_green-line"></div>
              <ul className="page-footer__menu_list">
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">about our shop</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">top sellers</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">our blog</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">new products</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">secure shopping</a>
                </li>
              </ul>
            </div>

            <div className="page-footer__menu_account">
              <div className="page-footer__menu_header">
                <span>my&nbsp;</span>
                <span>account </span>
              </div>
              <div className="page-footer__menu_green-line"></div>
              <ul className="page-footer__menu_list">
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">about our shop</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">top sellers</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">our blog</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">new products</a>
                </li>
                <li>
                  <i className="far fa-arrow-alt-circle-right"></i>
                  <a href="/bright-food">secure shopping</a>
                </li>
              </ul>
            </div>

            <div className="page-footer__menu_map">
              <div className="page-footer__menu_header">
                <span>my&nbsp;</span>
                <span>instagram </span>
              </div>
              <div className="page-footer__menu_green-line"></div>
              <div className="page-footer__menu_location">
                <MyMapComponent isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6eTsEqnp-DS4FahO3CBA2jsEOqhjBN0c&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `185px`, width: `265px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="page-footer_white">

          <div className="page-footer__total-footer">
            <div className="page-footer__total-footer_year">©2018</div>
            <div className="page-footer__total-footer_last-menu">
              {this.renderNavigation()}
            </div>
          </div>

      </div>

    </section>
  }
}