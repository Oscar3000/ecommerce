/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
module.exports = withFonts(withCss(withSass()));
