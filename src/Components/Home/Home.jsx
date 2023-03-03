import React, { useContext } from "react";
import { Global } from "../../App";
import "./container.css";

const Home = ({ first }) => {
  const Glob = useContext(Global);
  const data = Glob.obj.home;
  console.log();
  return (
    <div
      style={first ? Glob.obj.blackColor : Glob.obj.whiteColor}
      className="home"
    >
      <h1 style={{ textAlign: "center" }}>
        Build your dream <br></br>{" "}
        <span style={{ color: "rgb(54,184,125)" }}>career in tech</span>
      </h1>
      <h2>Get trained for top tech jobs by industry experts</h2>
      <h3 style={{ textAlign: "center" }}>{data.data}</h3>
      <button
        style={{
          backgroundColor: "rgb(54,184,125)",
          color: "white",
          width: "18rem",
          height: "2.5rem",
          borderRadius: "8px",
          border: "none",
        }}
      >
        <h2>Join Geekster</h2>
      </button>
    </div>
  );
};

export default Home;
