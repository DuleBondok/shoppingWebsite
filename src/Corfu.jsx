import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Plans.css";

function Corfu() {
  return (
    <>
      <Header></Header>
      <div className="mainCorfuDiv">
        <div className="corfuImagesDiv">
          <img className="corfuImg1" src="/public/corfu1.jpg"></img>
          <div className="corfuImagesVerticalDiv">
            <img className="corfuImg2" src="/public/corfu2.jpg"></img>
            <img className="corfuImg3" src="/public/corfu3.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Corfu;
