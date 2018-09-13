import React from 'react';

export default function GeneralInfo(props) {
  return (
    <section className="general-info cv__parts desktop-side tablet-left" id="information">
      <div className="cv_line-indent">
        <div className="my-image">
          <div className="my-image_container"></div>
        </div>
        <div className="information ">
          <p className="cv_headings">
            Hello!
          </p>
          <p className="cv_headings">
            I am Anastasiia Rubinchik.
          </p>
          <div className="information__self-description ">
            <p className="cv_text-indent"> I’ve been living in Berlin for last 2 years. I've got <b> a german work permit </b> and driving license.</p>
            <p className="cv_text-indent">Into programming I was engaged not accidentally - I'm surrounded by people connected with web development. I’ve got very interested in the process of programming and studying various techniques. </p>
            <p className="cv_text-indent">I have been studying programming since 6 months in my spare time. I learn on my own, namely I take online courses, read articles and books, practise writing code, performing various tasks.</p>
            <p className="cv_text-indent">My goal is to become a professional front-end developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}