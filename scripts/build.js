const fs = require("fs");
const fsExtra = require("fs-extra");

const template = fs.readFileSync("template.html", "utf-8");

const pagenames = fs.readdirSync("pages");

for (let pagename of pagenames) {
  const pagecontent = fs.readFileSync(`pages/${pagename}`, "utf-8");
  const fullPage = template.replace("{{content}}", pagecontent);
  fs.writeFileSync(`dist/${pagename}`, fullPage);
  fs.writeFileSync(`pages/${pagename}`, fullPage);
}

// create resume pages
for (let lang of ["de", "en"]) {
  const pagecontent = fs.readFileSync(
    `node_modules/@karuga/karuga-jsonresume/dist/resume_react_bootstrap_material_${lang}.html`,
    { encoding: "utf-8" }
  );
  const fullPage = template.replace("{{content}}", pagecontent);
  fs.writeFileSync(`dist/cv_${lang}.html`, fullPage);
  fs.writeFileSync(`pages/cv_${lang}.html`, fullPage);
}

fsExtra.copySync("images", "dist/images");
fsExtra.copySync("images", "pages/images");
