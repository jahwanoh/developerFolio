import React, { useContext } from "react";
import "./Devider.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Devider() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="devider-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Saad Pasta")}
          <img src="../../assets/images/bepro.jpg" alt="BeproStitching"/>
        </p>
        
        
      </div>
    </Fade>
  );
}
