import React from 'react';

export default function Experience(props) {
  return (
    <div className="experience cv__parts desktop-side" id="experience">
      <div className="cv_line-indent">
        <p className="cv_headings">
          professional experience
        </p>
        <div className="experience__description cv_text-indent" style={{marginBottom: "5px"}}>
          <p className="experience__description_timeline">&#9733; April 01, 2015 – May 15, 2015</p>
          <p className="experience__description_nomination">Trainee in Department of International Cooperation</p>
          <p className="experience__description_place">Joint Stock Company "Russian Railways", Moscow, Russia</p>
          <p className="experience__description_duties">Analysis of the development of the Eurasian Economic Union and identification of the weaknesses of the Eurasian Economic Union and its impact on the Russian railroad</p>
        </div>
        <div className="experience__description cv_text-indent">
          <p className="experience__description_timeline">&#9733; November 15,2016 - January 15,2018</p>
          <p className="experience__description_nomination">Tourist consultant and saleswoman</p>
          <p className="experience__description_place">TMB Tourismus-Marketing Brandenburg GmbH, Schoenefeld Airport</p>
          <p className="experience__description_duties">Travel tickets consultation, sightseeings advice, office activities</p>
        </div>
      </div>
    </div>
  );
}


