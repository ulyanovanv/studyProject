import React from 'react';

export default function Languages(props) {
  return (
    <section className="languages cv__parts desktop-side" id="languages">
      <div className="cv_line-indent">
        <p className="cv_headings ">
          languages
        </p>
        <div className="languages_container">
          <div className="languages__each english">
            <div className="languages__svg-container" ></div>
            <p className="languages_uppercase">English</p>
            <p className="languages_font-size">Upper-intermediate</p>
          </div>
          <div className="languages__each german">
            <div className="languages__svg-container"></div>
            <p className="languages_uppercase">German</p>
            <p className="languages_font-size">Upper-intermediate</p>
          </div>
          <div className="languages__each russian">
            <div className="languages__svg-container"></div>
            <p className="languages_uppercase">Russian</p>
            <p className="languages_font-size">Native-speaker</p>
          </div>
        </div>
      </div>
    </section>
  );
}