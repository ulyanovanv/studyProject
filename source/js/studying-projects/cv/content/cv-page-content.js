import React from 'react';
import shortid from 'shortid';

import GeneralInfo from './cv-pieces/general-info';
import Contacts from './cv-pieces/contacts';
import Education from './cv-pieces/education';
import Experience from './cv-pieces/experience';
import Techniques from './cv-pieces/techniques';
import Skills from './cv-pieces/skills';
import Languages from './cv-pieces/languages';
import Hobbies from './cv-pieces/hobbies';
import Project from './cv-pieces/project';
import Masonry from 'react-masonry-css'



const myProjects = [
  {projectClass: 'prj-bright-food', text: 'React, Redux, Flexbox, react-slick', link: '/bright-food', temporaryClasses: 'desktop-center tablet-left '},
  {projectClass: 'prj-online-shop', text: 'React, Flexbox, Responsive design', link: '/online-shop', temporaryClasses: 'desktop-side '},
  {projectClass: 'prj-calender', text: 'JS: Date object, Flexbox', link: '/calender', temporaryClasses: 'desktop-side tablet-left '},
  {projectClass: 'prj-mobile', text: 'SVG, responsive design', link: '/mobile', temporaryClasses: 'desktop-center '},
  {projectClass: 'prj-form-c13', text: 'HTML5, Flexbox, JQuery, Ajax', link: '/c13', temporaryClasses: 'desktop-side '},
  {projectClass: 'prj-game', text: 'Simple JS game', link: '/numbersgame', temporaryClasses: 'desktop-center '},
  {projectClass: 'prj-to-do-app', text: 'JQuery, Ajax', link: '/to-do-app', temporaryClasses: 'desktop-side tablet-left '},
];

const arrayOfCvPieces = [
  <GeneralInfo/>,
  <Education/>,
  <Experience/>,
  <Techniques/>,
  <Skills/>,
  <Languages/>,
  <Hobbies/>,
  <Contacts/>
];



// function genCharArray(charA, charZ) {
//   let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
//   for (; i <= j; ++i) {
//     a.push(String.fromCharCode(i));
//   }
//   return a;
// }


export default class CvPageContent extends React.Component {
  renderCVPieces(){
    let projects = myProjects.map(project => {
      return <Project
        projectClass={project.projectClass}
        temporaryClasses={project.temporaryClasses}
        text={project.text}
        link={project.link}
        key={shortid.generate()}
      />
    });

    let myCvContent = arrayOfCvPieces.concat(projects);

    // const letters = genCharArray('a', 'z');
    // let arrayOfCvContent = [];
    // for (let i = 0; i < myCvContent.length; i++) {
    //   arrayOfCvContent.push(<div key={letters[i]}>{myCvContent[i]}</div>);
    // }
    return myCvContent;
  }

  render() {
    return (<Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {this.renderCVPieces()}
    </Masonry>);
  }
}
