import React from "react";


export function Item(props) {
  return (
    <div className="first-page-collection__article"
         style={{
           backgroundImage: `url('${props.image}')`,
           filter: props.filter
         }}
         onClick={props.onClick}>

      {props.discount &&
      <div className="first-page-collection__article_reduction">
        <p className="first-page-collection__article_reduction_percentage">
          {props.discount}
          <span style={{fontSize: "0.5rem"}}>%</span>
        </p>
      </div>}


      <div className="first-page-collection__article_for-add-button">
        <div className="first-page-collection__article_add w-100 text-uppercase"
             style={{color: props.color, transition: 'color 0.5s'}}
        >
          {props.isAdded}
        </div>
        <div className="first-page-collection__article_trapezium w-75 mx-auto"
             style={{borderBottom: props.borderBottom}}></div>
      </div>
    </div>
  )
}

