import React from 'react';

export default function PageHeaderLower(props) {
  const navigationLinks = () => {
    return props.navNames.map((navName) => {
      return (
        <div className='pr-2' key={navName}>
          <a href='/online-shop'>{navName}</a>
        </div>
      )
    })
  };

  return (
  <div className='page-header__lower-menu'>
    <div className='content-restraint d-sm-flex flex-row align-items-center px-2'>
      <div className='col-sm-5 d-none d-sm-flex px-0 justify-content-start categories'>
        {navigationLinks()}
      </div>

      <div className='col-sm-2 d-sm-flex px-0 justify-content-center page-name'>
        <p>Anastasiia</p>
      </div>

      <div className='col-sm-5 d-none d-sm-flex px-0 justify-content-end align-items-center right-side'>
        <div className='d-md-flex justify-content-around'>
          {['facebook', 'twitter', 'pinterest', 'instagram'].map(socialIconName => {
            const className = `__social-nets mr-2 ${socialIconName}`;
            return <a className={className} href='/online-shop' key={socialIconName}></a>;
          })}
        </div>

        <div className="dropdown right-side__select-collection">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownCategories" data-toggle="dropdown">
            Categories
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCategories">
            {['Bikini', 'Underwear', 'Sexy socs'].map(category => {
              return <a className="dropdown-item" href="#" key={category}>{category}</a>;
            })}
          </div>
        </div>

      </div>

    </div>
  </div>);
}