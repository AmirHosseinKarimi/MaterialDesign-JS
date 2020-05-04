const fs = require("fs");
const lineReader = require("line-reader");
const rimraf = require("rimraf");

const PackageName = "materialdesign-js";
const mdiFilePath = require.resolve("@mdi/js/mdi.js");
const buildDir = "./icons";

build = () => {
  console.log("----------------------------------");
  console.log(`[${PackageName}] Building icons files...`);

  if (fs.existsSync(buildDir)) {
    console.log(`[${PackageName}] Deleting old icons...`);
    rimraf.sync(buildDir);
  }

  console.log(`[${PackageName}] Generating material design icons files...`);

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
      console.log(`[${PackageName}] ${generatedIcons} icons generated.`);
      console.log("----------------------------------");
    }
  );
};

build();
