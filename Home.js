import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left">
            <h2>
              Welcome to <span style={{ color: "#6c63ff" }}>Urvashi Patel</span>
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: "2" }}>
             Hello i am urvashi patel !
            </p>
            <div className="btn_div mt-4">
            <Button variant="danger" style={{letterSpacing:"1px",border:"none",borderRadius:4,background:"#2f2d69",marginRight:24}}>Project</Button>
            <Button variant="danger" style={{letterSpacing:"1px",border:"none",borderRadius:4,background:"#6c63ff",marginRight:24}}>Youtube</Button>
            </div>
          </div>
          <div className="right">
            <img src="images (12).jpeg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
