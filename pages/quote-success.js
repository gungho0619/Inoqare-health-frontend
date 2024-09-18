import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function QuoteSuccess() {
  const router = useRouter();
const [time, setTime] = useState(5);

   {/*  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/");
    }, 5000);
    const timeout = setInterval(() => {
      setTime((oldTime) => oldTime - 1);
    }, 1000);
    return () => {
      clearTimeout(redirect);
      clearInterval(timeout);
    };
  }, []);*/}

  return (
    <section className="Login-wrap pt-100 pb-100">
      <div className="container">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="login-form">
            <div className="login-header bg-minsk">
              <span>
                Thank you for submitting quote, please wait for confirmation
                email and our customer executive will get back to you. You will
                automatically redirect to homepage in {time} seconds
              </span>
            </div>
            <button onClick={() => router.push("/")} className="btn v5">
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteSuccess;
