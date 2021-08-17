import React from "react";
import "../css/Home.css";
import LeftMenu from "./LeftMenu";
import RightBody from "./RightBody";

function Home() {
  return (
    <div className="home">
      <LeftMenu />
      <RightBody />
    </div>
  );
}

export default Home;
