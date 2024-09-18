import $ from "jquery";
import axios from "axios";

// Initialization for Google Translator
export const googleTranslateElementInit = (id = "google_translate_element") => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,fr,ar,ru,de,es,hi,zh-CN", // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    id
  );
};

// function to go translation
export function translateLanguage(lang) {
  const frame = $(".goog-te-menu-frame:first");

  const language = frame
    .contents()
    .find(".goog-te-menu2-item span.text:contains(" + lang + ")")
    .get(0);
  const frameContents = frame
    .contents()
    .find(".goog-te-menu2-item span.text")
    .addClass("notranslate");
/*  for (var i = 0; i < 7; i++) console.log(frameContents[i].innerHTML);*/
  if (language) language.click();
}

export const getLocation = async (setName, toggleSelected) => {
  try {
    const { data } = await axios.get("https://geolocation-db.com/json/");
    const countryName = data.country_name;
    if (countryName === "India") {
      setName({ country_name: "हिन्दी", code: "hi", text: "Hindi" });
      toggleSelected({ country_name: "हिन्दी", code: "hi", text: "Hindi" }, 6);
    } else if (
      [
        "Belgium",
        "Benin",
        "Burkina Faso",
        "Burundi",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Comoros",
        "Congo",
        "Djibouti",
        "Equatorial Guinea",
        "France",
        "Gabon",
        "Guadeloupe",
        "Guinea",
        "Luxembourg",
        "Madagascar",
        "Mali",
        "Martinique",
        "Monaco",
        "Niger",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Martin",
        "Senegal",
        "Switzerland",
        "Togo",
      ].includes(countryName)
    ) {
      setName({
        country_name: "français",
        code: "fr",
        text: "French",
        to: "#googtrans(en|fr)",
      });
      setTimeout(() => {
        toggleSelected(
          {
            country_name: "français",
            code: "fr",
            text: "French",
            to: "#googtrans(en|fr)",
          },
          1
        );
      }, 3000);
    } else if (
      [
        "Algeria",
        "Bahrain",
        "Egypt",
        "Iraq",
        "Jordan",
        "Kuwait",
        "Lebanon",
        "Libya",
        "Morocco",
        "Oman",
        "Qatar",
        "Saudi Arabia",
        "Sudan",
        "Syria",
        "Tunisia",
        "United Arab Emirates",
        "Yemen",
      ].includes(countryName)
    ) {
      setName({
        country_name: "عربى",
        code: "ar",
        text: "Arabic",
        to: "#googtrans(en|ar)",
      });
      setTimeout(() => {
        toggleSelected(
          {
            country_name: "عربى",
            code: "ar",
            text: "Arabic",
            to: "#googtrans(en|ar)",
          },
          2
        );
      }, 3000);
    } else if (["Moldova", "Russia", "Ukraine"].includes(countryName)) {
      setName({ country_name: "русский", code: "ru", text: "Russian" });
      setTimeout(() => {
        toggleSelected(
          { country_name: "русский", code: "ru", text: "Russian" },
          3
        );
      }, 3000);
    } else if (
      [
        "Austria",
        "Belgium",
        "Germany",
        "Liechtenstein",
        "Luxembourg",
        "Switzerland",
      ].includes(countryName)
    ) {
      setName({ country_name: "Deutsch", code: "de", text: "German" });
      setTimeout(() => {
        toggleSelected(
          { country_name: "Deutsch", code: "de", text: "German" },
          4
        );
      }, 3000);
    } else if (
      [
        "Argentina",
        "Bolivia",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Dominican Republic",
        "Ecuador",
        "El Salvador",
        "Equatorial Guinea",
        "Guatemala",
        "Honduras",
        "Latin America",
        "Mexico",
        "Nicaragua",
        "Panama",
        "Paraguay",
        "Peru",
        "Puerto Rico",
        "Spain",
        "Uruguay",
        "Venezuela",
      ].includes(countryName)
    ) {
      setName({ country_name: "Español", code: "es", text: "Spanish" });
      setTimeout(() => {
        toggleSelected(
          { country_name: "Español", code: "es", text: "Spanish" },
          5
        );
      }, 3000);
    } else if (countryName == "China") {
      setName({
        country_name: "中国人",
        code: "zh-CN",
        text: "Chinese",
      });
      setTimeout(() => {
        toggleSelected(
          { country_name: "中国人", code: "zh-CN", text: "Chinese" },
          7
        );
      }, 3000);
    }
  } catch (ex) {
    console.log(ex);
  }
};

export const getCountry = async () => {
  try {
    const { data } = await axios.get("https://geolocation-db.com/json/");
    return data.country_name;
  } catch (ex) {
    console.log(ex);
  }
};
