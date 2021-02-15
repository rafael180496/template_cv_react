import React from "react";

const CoverContent = ({ post, name }) => {
  return (
    <div className="cover-bg p-3 p-lg-4 text-white">
      <div className="row">
        <div className="col-lg-8 col-md-7 text-center text-md-start">
          <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
            {name}
          </h2>
          <p data-aos="fade-left" >
            {post}
          </p>
          <div
            className="d-print-none"
            data-aos="fade-left"
            data-aos-delay="200"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CoverContent;
