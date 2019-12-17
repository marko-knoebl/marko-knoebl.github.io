const fs = require("fs");
const fsExtra = require("fs-extra");

const template = fs.readFileSync("template.html", "utf-8");
console.log(template);

const pagenames = fs.readdirSync("pages");
console.log(pagenames);

for (let pagename of pagenames) {
  const pagecontent = fs.readFileSync(`pages/${pagename}`, "utf-8");
  const fullPage = template.replace("{{content}}", pagecontent);
  fs.writeFileSync(`dist/${pagename}`, fullPage);
}

fsExtra.copySync("images", "dist/images");
