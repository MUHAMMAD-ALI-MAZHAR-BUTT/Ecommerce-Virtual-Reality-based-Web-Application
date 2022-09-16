import React from "react";
import img from "../../asset/img/1.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Prod.css";
import { NavLink } from "react-router-dom";

const TitleStyle = {
  textTransform: "capitalize",
  textShadow: "none",
  textOverflow: "ellipsis",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontWeight: "700",
};

const Card = () => {
  return (
    <>
      <div
        className="card shadow bg-white border-0 mt-2 mb-2 mx-auto py-3"
        style={{ width: "75%", fontFamily: "Merriweather, serif" }}
      >
        <img
          src={img}
          className="card-img-top img-fluid my-1 p-3"
          style={{ height: "200px" }}
          alt="..."
        />
        <div className="card-body text-center">
          <h3 className="card-title " style={TitleStyle}>
            Product Title
          </h3>
          <hr className="w-75 mx-auto my-0" />
          <div className="card-text py-2">
            <p id="price" className="h4 text-dark fw-bold mb-0">
              $ 4000
            </p>
          </div>
          <NavLink
            exact="true"
            to={"/detail"}
            className="btn btn-success bg-gradient text-white"
            style={{
              fontSize: "18px",
              background: "rgb(255,106,0)",
              border: "none",
            }}
          >
            {" "}
            Product Details{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
