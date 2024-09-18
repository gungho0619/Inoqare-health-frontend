const path = require("path");

const securityHeaders = [
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-site",
  },
  {
    key: "Access-Control-Allow-Credentials",
    value: "true",
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "*", // Set your origin
  },
  {
    key: "x-custom-header",
    value: "my custom header value",
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  },
  {
    key: "Access-Control-Allow-Headers",
    value:
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-site",
  },
];

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: ["https://flagsapi.com"], // Add flagsapi.com as a trusted image domain
  },
};
