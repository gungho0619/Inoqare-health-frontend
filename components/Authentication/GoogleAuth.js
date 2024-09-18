import errorHandler from "../../errorHandler/handler";
import axios from "../../axios";
import alert from "../common/Alert";
export const clientId =
  "1021091018855-tmu1vmtk96pqed9g19m5bdssqh9a3kol.apps.googleusercontent.com";

export const onSuccess = ({ profileObj }) => {
  errorHandler(
    async () => {
      const { data } = await axios.post("/user/socialLogin", {
        email: profileObj.email,
        password: profileObj.googleId,
        first_name: profileObj.givenName,
        last_name: profileObj.family,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data));
      alert("Authenticated", "User logged in successfully", "success");
      setTimeout(() => {
        window.location = "/quote-list";
      }, 2000);
    },
    (ex) => {
      const erMsg = ex.response.data.error;
      if (erMsg && erMsg.includes("Invalid"))
        alert("Error", "Email already in use", "error");
    }
  );
};

export const onFailure = (res) => {
  alert("Error", "User authentication using gmail failed", "error");
  console.log(res);
};
