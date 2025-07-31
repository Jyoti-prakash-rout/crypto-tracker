import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrowIcon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHnadler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "cad": {
        setCurrency({ name: "cad", symbol: "CA$" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <Link>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Logo</li>
      </ul>
      <div className="nav-right">
        <select name="" id="" onChange={currencyHnadler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
          <option value="cad">CAD</option>
        </select>
        <button>
          Sign up <img src={arrowIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
