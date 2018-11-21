import React from "react";

export default function Support() {
  return (
    <section className="first-page-support">
      <div className="d-none d-md-flex flex-row justify-content-between content-restraint p-2">
        <div className="first-page-support__feature first-page-support__feature_beige shipping">
          <p className="first-page-support__feature_name text-uppercase">
            free sheeping
          </p>
        </div>

        <div className="first-page-support__feature_triangle-beige-left"></div>

        <div className="first-page-support__feature first-page-support__feature_black ">
          <div className="first-page-support__feature_triangle-white-left"></div>
          <div className="first-page-support__feature_black_text-container return">
            <p className="first-page-support__feature_name text-uppercase">
              30-days return
            </p>
          </div>
          <div className="first-page-support__feature_triangle-white-right"></div>
        </div>

        <div className="first-page-support__feature_triangle-beige-right"></div>

        <div className="first-page-support__feature first-page-support__feature_beige support">
          <p className="first-page-support__feature_name text-uppercase">
            24/7 support
          </p>
        </div>
      </div>
    </section>
  );
}