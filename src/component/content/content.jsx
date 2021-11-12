import React from "react";
import pic from "../../images/jpg/header-img-florist.jpg";
import Card1 from "../card1";
import Card2 from "../card2";
import Card3 from "../card3";
import "./content.css";
import pin1 from "../../images/svg/pin-01.svg";
import pin2 from "../../images/svg/pin-02.svg";
import desktopLine from "../../images/svg/header-line-desktop.svg";
import phoneLine from "../../images/svg/header-line-phone-portrait.svg";

export default function Content() {
  return (
    <div className="content">
      <div className="content-pic">
        <img src={pic} alt="florist" />
        <div className="pic-text">
          <h3>potject</h3>
          <p>Pottery in Bangkok</p>
        </div>
      </div>
      <div className="content-text">
        <div>
          <p className="sub">Explore new opportunities.</p>
          <h1 className="head">
            <span>Grow </span>your business.
          </h1>
        </div>
        <div className="desc">
          <p>
            <span>Wiket is the first business to business network </span>which
            lets you connect to mind like people.
          </p>
        </div>
      </div>
      <div className="card1">
        <Card1 />
      </div>
      <div className="card2">
        <Card2 />
      </div>
      <div className="card3">
        <Card3 />
      </div>
      <img src={pin1} alt="pin01" className="pin1" />
      <img src={pin2} alt="pin02" className="pin2" />
      <img src={desktopLine} alt="desktop line" className="desktop-line" />
      <img src={phoneLine} alt="phone line" className="phone-line" />
    </div>
  );
}
