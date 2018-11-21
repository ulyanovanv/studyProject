import React from 'react';

export default function PageHeaderUpper(props) {
  return (
  <div className='page-header__upper-menu'>
    <nav className='navbar navbar-expand-sm navbar-light content-restraint px-2'>
      <a href='tel:01793131313'>Tel: 0 179 3131313</a>

      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarUpperMenu' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse justify-content-end' id='navbarUpperMenu'>
        <ul className='d-sm-flex list-unstyled p-0 mb-0'>
          <li className='nav-item active px-2 navbar-border'>
            <a className='nav-link text-uppercase p-0' href='/online-shop'>welcome</a>
          </li>
          <li className='nav-item navbar-border px-2'>
            <a className='nav-link text-uppercase p-0' href='/online-shop'>my account</a>
          </li>
          <li
            className='nav-item navbar-border px-2 d-inline'
            onClick={props.onClick}
            title='Choose the products from the summer collection before click'
          >
            <a className='text-uppercase p-0'>my basket</a>
            {' '}
            <span className='badge badge-pill badge-dark'>0</span>
          </li>
          <li className='nav-item px-2'>
            <a className='nav-link text-uppercase p-0' href='/online-shop'>login</a>
          </li>
        </ul>
      </div>

    </nav>
  </div>);
}
//TODO: enable badge work