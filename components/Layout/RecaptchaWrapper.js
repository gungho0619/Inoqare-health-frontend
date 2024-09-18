import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RecaptchaWrapper = (Component) => {
  return (props) => (
    <GoogleReCaptchaProvider reCaptchaKey="6LeYlj8eAAAAADSoxsI2eAxWCO7m_mlkD0r0xC-3">
      <Component {...props} />
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaWrapper;
