import React from "react";
import Link from "../../utils/ActiveLink";

const AdminNavbar = () => {
  return (
    <>
      <div className="col-lg-3">
        <ul className="nav nav-tabs user-tablist" id="myTab">
          <Link href="/admin/users" activeClassName="active">
            <li className="nav-item">
              <button className="nav-link">User List</button>
            </li>
          </Link>
          <Link href="/admin/quotes" activeClassName="active">
            <li className="nav-item">
              <button className="nav-link">Quote List</button>
            </li>
          </Link>
          <li className="nav-item">
            <button className="nav-link">Log Out</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavbar;
