import React, { useContext } from "react";
import { Global } from "../../App";
import "./about.css"
const Aboutus = ({first}) => {
  const Glob = useContext(Global);

  return <div className="about" style={first ? Glob.obj.blackColor : Glob.obj.whiteColor} >
    <h1>{Glob.obj.aboutus.h1}</h1>
  </div>;
};

export default Aboutus;
