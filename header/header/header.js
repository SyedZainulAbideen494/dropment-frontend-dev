import React, { useState, useEffect, useReducer, useRef } from "react";
import dropment from "../../header/images/dropment.png";
import { Fragment } from "react";
import "./header.css";
import Mycart from "../cart/mycart";
import Myordersbtn from "./myordersbtn";
import Mycartbtn from "./mycartbtn";
import Profilebtn from "./profilebtn";
import Sellerbtn from "./sellerbtn";
import Axios from "axios";
import Button from "../../UI/button";
import { Router, Link } from "react-router-dom";
import Cartprovider from "../cart/cartprovider";
import logo from '../images/dropmentlogo.jpg'

const Mobileheader = (props) => {
  const [auth, setauth] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    }
  }, []);

  return (
    <Fragment>
      <div className="mobileheader">
        <header>
          <div className="tpinlinelemobile">
            <span className="dopment">
              <img src={logo} />
              <h2>Dropment</h2>
            </span>
            <span className="mobilebtns">
              {auth ? (
                <div className="logoutbtnmobileheader">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="loginbtnmobileheader">
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </span>
          </div>
          <div className="headerinlineelemobile">
            <div className="btnsmboile">
              <Link to="/profile">
                <span className="mobilebtns">
                  <button>My Profile</button>
                </span>
              </Link>
              <Link to="/orders">
                <span className="mobilebtns">
                  <button>My Orders</button>
                </span>
              </Link>
              <span className="mobilebtns">
                <Link to="/search">
                  <button>Search</button>
                </Link>
              </span>
            </div>
          </div>
        </header>
      </div>

      <div className="tabletheader">
        <header>
          <div className="headerinlineeletabletheader">
            <span className="dopment">
              <img src={logo} />
              <h2>Dropment</h2>
            </span>
            <Link to="/profile">
              <span className="tabletheaderbtns">
                <button>My Profile</button>
              </span>
            </Link>
            <Link to="/orders">
              <span className="tabletheaderbtns">
                <button>My orders</button>
              </span>
            </Link>
            <Link to="/search">
              <button>Search</button>
            </Link>
            <span className="authtabletheaderbtn">
              {auth ? (
                <div className="logoutbtntabletheader">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="loginbtntabletheader">
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </span>
          </div>
        </header>
      </div>

      <div className="smallscreenheader">
        <header>
          <div className="heaerinlineelesmallscreenheader">
            <span className="dopment">
              <img src={logo} />
              <h2>Dropment</h2>
            </span>
            <Link to="/profile">
              <span className="smallscreenbtns">
                <button>My Profile</button>
              </span>
            </Link>
            <Link to="/orders">
              <span className="smallscreenbtns">
                <button>My Orders</button>
              </span>
            </Link>
            <Link to="/search">
              <button>Search</button>
            </Link>
            <span className="smallscreenbtns"></span>
            <span className="auth">
              {auth ? (
                <div className="logoutbtnsmallscreen">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="loginbtnsmallscreen">
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </span>
          </div>
        </header>
        <hr />
      </div>

      <div className="largescreenheader">
        <header>
          <div className="headerinlineele">
            <span className="dopment">
              <img src={logo} />
              <h2>Dropment</h2>
            </span>
            <Link to="/profile">
              <span className="largescreenheaderbtns">
                <button>My Profile</button>
              </span>
            </Link>
            <Link to="/orders">
              <span className="largescreenheaderbtns">
                <button>My Orders</button>
              </span>
            </Link>
            <Link to="/search">
              <button>Search</button>
            </Link>
            <span className="largescreenheaderauthbtns">
              {auth ? (
                <div className="logoutbtnlargescreen">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="loginbtnlargescreen">
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </span>
          </div>
        </header>
      </div>
      <hr />
    </Fragment>
  );
};

export default Mobileheader;
