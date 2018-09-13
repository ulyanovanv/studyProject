import React from 'react';

export default function Techniques(props) {
  return (
    <section className="techniques cv__parts  desktop-center" id="techniques">
      <div className="cv_line-indent">
        <p className="cv_headings">
          techniques
        </p>
        <div className="techniques_container cv_text-indent">
          <div className="techniques__each">
            <p className="html techniques__svg">HTML5</p>
          </div>
          <div className="techniques__each">
            <p className="css33 techniques__svg">CSS3</p>
          </div>
          <div className="techniques__each">
            <p className="sass techniques__svg">Sass</p>
          </div>
          <div className="techniques__each">
            <p className="layouts techniques__svg">Flexbox and Grid Layouts</p>
          </div>
          <div className="techniques__each">
            <p className="svg techniques__svg">SVG graphics</p>
          </div>
          <div className="techniques__each">
            <p className="bootstrap3 techniques__svg">Bootstrap3</p>
          </div>
          <div className="techniques__each">
            <p className="jss techniques__svg">JavaScript, ES6</p>
          </div>
          <div className="techniques__each">
            <p className="jquery techniques__svg">JQuery</p>
          </div>
          <div className="techniques__each">
            <p className="react techniques__svg">ReactJS, Redux</p>
          </div>
          <div className="techniques__each">
            <p className="npm techniques__svg">npm</p>
          </div>
          <div className="techniques__each">
            <p className="git techniques__svg">git</p>
          </div>
        </div>
      </div>
    </section>
  );
}
