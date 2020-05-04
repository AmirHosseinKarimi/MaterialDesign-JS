const fs = require("fs");
const inquirer = require("inquirer");
const lineReader = require("line-reader");
const rimraf = require("rimraf");

const mdiFilePath = require.resolve("@mdi/js/mdi.js");
const buildDir = "./icons";

run = () => {
  console.log("----------------------------------");
  console.log("[mdi-js] Building icons files");

  if (!fs.existsSync(buildDir)) {
    build();
    return;
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "directory",
        message: `\nBuild(${buildDir}) directory already exist.`,
        choices: [
          "Rename old directory (recommended)",
          "Delete old directory!",
        ],
      },
    ])
    .then(({ directory }) => {
      if (directory === "Rename old directory (recommended)") {
        var d = new Date();
        var datestring = [
          d.getFullYear(),
          d.getMonth() + 1,
          d.getDate(),
          d.getHours(),
          d.getMinutes(),
          d.getSeconds(),
        ].join("-");
        fs.renameSync(buildDir, buildDir + "-old-" + datestring);
      } else if (directory === "Delete old directory!") {
        rimraf.sync(buildDir);
      }

      build();
    });
};

build = () => {
  console.log("Generating material design icons files...");

  fs.mkdirSync(buildDir);
  var generatedIcons = 0;

  lineReader.eachLine(
    mdiFilePath,
    function (line) {
      if (line.substr(0, 2) === "//") return;

      line = line.split(" = ");
      fileName = line[0].substr(11);
      data = "export default " + line[1];
      fs.writeFileSync(`${buildDir}/${fileName}.js`, data);
      generatedIcons++;
    },
    function (err) {
      if (err) throw err;
      console.log(`${generatedIcons} icons generated.`);
      console.log("----------------------------------");
    }
  );
};

run();
