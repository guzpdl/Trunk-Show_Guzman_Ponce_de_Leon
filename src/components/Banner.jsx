import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Link to={"/products"}>
        <Image
          src="/assets/images/Main_Banner_Web_Handbags_02706048-5f46-4e09-8227-46f46e35c15f_1500x.webp"
          alt="bannerHome"
          className="banner"
          fluid
        />
      </Link>
    </div>
  );
};

export default Banner;
