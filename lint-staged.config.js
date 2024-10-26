const path = require("path");

module.exports = {
  "**/*.(ts|tsx|js)": (filenames) => (
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" --file ")}`,
    `eslint --fix ${filenames.join(" ")}`,
    `prettier --write ${filenames.join(" ")}`
  ),
  "**/*.(md|json)": (filenames) => `prettier --write ${filenames.join(" ")}`,
};
