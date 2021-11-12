import React from "react";
import { Button, Container } from "@theme-ui/components";
import logo from "../../images/svg/wiket-logo.svg";
import "./header.css";

export default function Header() {
  return (
    <Container pl={3} pr={3}>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <div className="navbar-link">
          <ul className="navbar-item">
            <li>Benefits</li>
            <li>Your Profile</li>
            <li>Connections</li>
            <li>Plans & pricing</li>
          </ul>
          <div>
            <Button bg={"#fda622"}>Get Started</Button>
          </div>
          
        </div>
      </div>
    </Container>
  );
}
