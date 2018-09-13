import React from 'react';
import PropTypes from 'prop-types';

export default function Project(props) {
  return (
    <section className={"cv__parts projects " + props.temporaryClasses + props.projectClass}>
      <p className="projects__used-techniques">{props.text}</p>
      <a href={props.link} target="_blank">
        <div className={"projects__container " + `${props.projectClass}_img`} title="Click me"></div>
      </a>
    </section>
  );
}

Project.propTypes = {
  temporaryClasses: PropTypes.string.isRequired,
  projectClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

