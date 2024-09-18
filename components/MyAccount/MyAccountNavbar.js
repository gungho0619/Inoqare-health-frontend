import React from "react";
import Link from "../../utils/ActiveLink";
import axios from "../../axios";

const MyAccountNavbar = () => {
  const handleLogout = async () => {
    await axios.get("/user/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/";
  };

  return (
    <>
      <div className="col-lg-3">
        <ul className="nav nav-tabs user-tablist" id="myTab">
          <Link href="/quote-list" activeClassName="active">
            <li className="nav-item">
              <button className="nav-link">Quote List</button>
            </li>
          </Link>
          <Link href="/update-profile" activeClassName="active">
            <li className="nav-item">
              <button className="nav-link">Update Profile</button>
            </li>
          </Link>
          <li className="nav-item" onClick={handleLogout}>
            <button className="nav-link">Log Out</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyAccountNavbar;
