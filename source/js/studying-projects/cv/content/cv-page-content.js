import React, {Fragment} from 'react';
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

const myProjects = [
  {projectClass: 'prj-bright-food', text: 'React, Redux, Flexbox, react-slick', link: '/bright-food', temporaryClasses: 'desktop-center tablet-left '},
  {projectClass: 'prj-online-shop', text: 'React, Flexbox, Responsive design', link: '/online-shop', temporaryClasses: 'desktop-side '},
  {projectClass: 'prj-calender', text: 'JS: Date object, Flexbox', link: '/calender', temporaryClasses: 'desktop-side tablet-left '},
  {projectClass: 'prj-mobile', text: 'SVG, responsive design', link: '/mobile', temporaryClasses: 'desktop-center '},
  {projectClass: 'prj-form-c13', text: 'HTML5, Flexbox, JQuery, Ajax', link: '/c13', temporaryClasses: 'desktop-side '},
  {projectClass: 'prj-game', text: 'Simple JS game', link: '/numbersgame', temporaryClasses: 'desktop-center '},
  {projectClass: 'prj-to-do-app', text: 'JQuery, Ajax', link: '/to-do-app', temporaryClasses: 'desktop-side tablet-left '},
];



export default class CvPageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  initializeMyProjects(){
    return myProjects.map(project => {
      return <Project
        projectClass={project.projectClass}
        temporaryClasses={project.temporaryClasses}
        text={project.text}
        link={project.link}
        key={shortid.generate()}
      />
    })
  }

  render() {
    return (<Fragment>
      <GeneralInfo/>
      <Education/>
      <Experience/>
      <Techniques/>
      <Skills/>
      <Languages/>
      <Hobbies/>
      <Contacts/>
      {this.initializeMyProjects()}
    </Fragment>);
  }
}

{/*<section class="prj-bright-food cv__parts projects desktop-center tablet-left" id="prj-online-shop">*/}
  {/*<p class="projects__used-techniques">React, Redux, Flexbox, react-slick</p>*/}
  {/*<a href="/bright-food" target="_blank">*/}
    {/*<div class="projects__container prj-bright-food_img" title="Click me"></div>*/}
  {/*</a>*/}
{/*</section>*/}

{/*<section class="prj-online-shop cv__parts projects desktop-side" id="prj-online-shop">*/}
  {/*<p class="projects__used-techniques">React, Flexbox, Responsive design</p>*/}
{/*<a href="/online-shop" target="_blank">*/}
  {/*<div class="projects__container prj-online-shop_img" title="Click me"></div>*/}
{/*</a>*/}
{/*</section>*/}

{/*<section class="prj-calender cv__parts projects desktop-side tablet-left " id="prj-calender">*/}
  {/*<p class="projects__used-techniques">JS: Date object, Flexbox</p>*/}
  {/*<a href="/calender" target="_blank">*/}
    {/*<div class=" projects__container prj-calender_img" title="Click me"></div>*/}
  {/*</a>*/}
{/*</section>*/}

{/*<section class="prj-mobile cv__parts projects desktop-center" id="prj-mobile">*/}
  {/*<p class="projects__used-techniques">SVG, responsive design</p>*/}
{/*<a href="/mobile" target="_blank">*/}
  {/*<div class=" projects__container prj-mobile_img" title="Click me"></div>*/}
{/*</a>*/}
{/*</section>*/}

{/*<section class="prj-form-c13 cv__parts projects desktop-side" id="prj-form-c13">*/}
  {/*<p class="projects__used-techniques">HTML5, Flexbox, JQuery, Ajax</p>*/}
  {/*<a href="/c13" target="_blank">*/}
    {/*<div class=" projects__container prj-form-c13_img" title="Click me"></div>*/}
  {/*</a>*/}
{/*</section>*/}

{/*<section class="prj-game cv__parts projects desktop-center" id="prj-game">*/}
  {/*<p class="projects__used-techniques">Simple JS game</p>*/}
{/*<a href="/numbersgame" target="_blank">*/}
  {/*<div class=" projects__container prj-game_img" title="Click me"></div>*/}
{/*</a>*/}
{/*</section>*/}


{/*<section class="prj-to-do-app cv__parts projects desktop-side tablet-left" id="prj-to-do-app">*/}
  {/*<p class="projects__used-techniques">JQuery, Ajax</p>*/}
  {/*<a href="/to-do-app" target="_blank">*/}
    {/*<div class="projects__container prj-to-do-app_img" title="Click me"></div>*/}
  {/*</a>*/}
{/*</section>*/}