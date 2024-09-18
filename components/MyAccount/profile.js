import React from "react";
import MyAccountNavbar from "../../components/MyAccount/MyAccountNavbar";

const Profile = () => {
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container account-center">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab_1"
                  role="tabpanel"
                >
                  <div className="user-details">
                    <h2 className="account-title">User Details</h2>
                    <ul className="user-info">
                      <li>
                        <span>Full Name:</span>
                        <p> Jhon Conor</p>
                      </li>
                      <li>
                        <span>Bio:</span>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facere incidunt minus accusamus dignissimos.
                          Debitis tenetur voluptatum ducimus quis provident
                          soluta molestiae dolorum veritatis hic quaerat!
                        </p>
                      </li>
                      <li>
                        <span>Email:</span>
                        <p>jhonconor@email.com</p>
                      </li>
                      <li>
                        <span>Phone:</span>
                        <p> +000 0000 000</p>
                      </li>
                      <li>
                        <span>Country:</span>
                        <p>USA</p>
                      </li>
                      <li>
                        <span>Postcode:</span>
                        <p>0000</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
