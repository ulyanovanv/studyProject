import React from 'react';

export default function Hobbies(props) {
  return (
    <section className="hobbies cv__parts desktop-center tablet-left" id="hobbies">
      <div className="cv_line-indent">
        <p className="cv_headings ">
          hobbies
        </p>
        <div className="hobbies_container ">
          <div className="hobbies__each">
            <img src="/images/svg/hobbies/snowboarding.svg" className="hobbies__svg snowboarding" alt="snowboarding"
                 title="snowboarding"/>
          </div>
          <div className="hobbies__each">
            <img src="/images/svg/hobbies/travelling.svg" className="hobbies__svg travelling" alt="travelling"
                 title="travelling"/>
          </div>
          <div className="hobbies__each">
            <img src="/images/svg/hobbies/board-games.svg" className="hobbies__svg board-games" alt="board games"
                 title="board games"/>
          </div>
          <div className="hobbies__each">
            <img src="/images/svg/hobbies/handiwork.svg" className="hobbies__svg handiwork" alt="handiwork"
                 title="handiwork"/>
          </div>
          <div className="hobbies__each">
            <img src="/images/svg/hobbies/tv-series.svg" className="hobbies__svg tv-series" alt="TV series"
                 title="TV series"/>
          </div>
          <div className="hobbies__each">
            <img src="/images/svg/hobbies/coins.svg" className="hobbies__svg coins" alt="eurocoins collection"
                 title="eurocoins collection"/>
          </div>
        </div>
      </div>
    </section>
  );
}