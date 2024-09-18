import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MyAccountNavbar from "../components/MyAccount/MyAccountNavbar";
import fetcher from "../fetcher/getFetcher";

function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const { data, error } = useSWR("/quote/mine", fetcher);

  useEffect(() => {
    if (data) setQuotes(data.data);
    else if (error) console.log(error);
  }, [data]);

  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div>
                  <h2 className="account-title">Quote List</h2>
                  {!data && !error ? (
                    <div className="text-center pt-100">
                      <div className="spinner-grow" role="status"></div>
                    </div>
                  ) : quotes.length === 0 ? (
                    <h6 className="mt-5">No Quotes to show</h6>
                  ) : (
                    <div className="wishlist-table ">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Treatment Type</th>
                            <th scope="col">Residence Country</th>
                            <th scope="col">Desired Country</th>
                            <th scope="col">Status</th>
                           {/* <th scope="col">More Details</th>*/}
                          </tr>
                        </thead>
                        <tbody>
                          {quotes.map((q) => (
                            <tr>
                              <td scope="col">
                                <p className="wh-tem-price">
                                  {" "}
                                  {q.treatment_info}
                                </p>
                              </td>
                              <td>
                                <p className="wh-tem-price">
                                  {q.source_country}
                                </p>
                              </td>
                              <td>
                                <p className="wh-tem-price">
                                  {q.destination_country}
                                </p>
                              </td>
                              <td>
                                <p className="wh-tem-price">{q.status}</p>
                              </td>
                             {/* <td>
                                <button type="button">
                                  <span className="las la-info"></span>
                                </button>
                          </td>*/}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuoteList;
