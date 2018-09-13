import React from 'react';

export default function Contacts(props) {
  return (
    <section className="contacts cv__parts desktop-center" id="contacts">
      <div className="cv_line-indent">
        <p className="cv_headings">
          contacts
        </p>
        <div className="contacts__details">
          <p>
            <a title="my website" className="contacts_links contacts_text-bold" href="http://anastasiia.ilfate.net/" target="_blank">
              http://anastasiia.ilfate.net/
            </a>
          </p>
          <p>
            git repository:
            <a title="my git repository"  className="contacts_links contacts_text-bold"  href="https://github.com/ulyanovanv" target="_blank">
              https://github.com/ulyanovanv
            </a>
          </p>
          <p >
            e-mail:
            <a className="contacts_text-bold" href="mailto:av.ulyanova.com" style={{color: '#4d4141'}}>av.ulyanova@gmail.com</a>
          </p>
          <p>
            Phone number:
            <span className="contacts_text-bold">+49 179 3182901</span>
          </p>
          <p>
            <a title="my CV" className="contacts_links contacts_text-bold" href="/cv_doc/CV_english_IT_as_web.docx" target="_blank">
              Download CV
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}