import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

import ncb__logo from "../../../assets/ncb__logo.png";
import homeNavStyles from "../../../styles/Home/homeNavbar.module.css";
import userNavStyles from "../../../styles/forms/userNavbar.module.css";
import authContext from "context/auth/authContext";

const HomeNavbar = (props) => {
  const { isAuthenticated, user } = useContext(authContext);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    if (isAuthenticated === true) {
      console.log(props);
      props.history.push(`${user.role}/dispatch`);
    }
  }, [isAuthenticated]);

  return (
    <>
      <nav className={homeNavStyles.navbar__wrapper}>
        <div className={homeNavStyles.navbar}>
          <div className={homeNavStyles.logo}>
            <Link to="/" className={homeNavStyles.logo__center}>
              <img src={ncb__logo} alt="NCB Logo" />
              <p>NCB DAAS</p>
            </Link>
          </div>

          {/* <div className={homeNavStyles.nav_right_col}> */}
          <div className={userNavStyles.userIconAction}>
            <div
              className={userNavStyles.profile}
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
            >
              <FaRegUserCircle />
            </div>

            {menuToggle && (
              <div
                style={{ display: "block" }}
                className={userNavStyles.menu + " non__select"}
              >
                <ul>
                  <li>
                    <div className={userNavStyles.menu__heading}>USER NAME</div>
                  </li>
                  <li>
                    <FiSettings />
                    <Link to={"/manufacturer/settings"}>Settings</Link>
                  </li>
                  <li>
                    <HiOutlineLogin />
                    <Link to={"/manufacturer/logout"}>Log Out</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default HomeNavbar;
