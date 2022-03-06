const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const home = fs.readFileSync("./public/pages/home.html").toString();
const javascriptTheory = fs.readFileSync("./public/pages/javascript-theory.html").toString();
const restApi = fs.readFileSync("./public/pages/rest-API.html").toString();
const ssr = fs.readFileSync("./public/pages/SSR.html").toString();
const tools = fs.readFileSync("./public/pages/tools.html").toString();

const homePage = nav.replace("%%HOME%%", "active") + home + footer;
const javascriptTheoryPage = nav.replace("%%JAVASCRIPT_THEORY%%", "active") + javascriptTheory + footer;
const restApiPage = nav.replace("%%REST_API%%", "active") + restApi + footer;
const ssrPage = nav.replace("%%SSR%%", "active") + ssr + footer;
const toolsPage = nav.replace("%%TOOLS%%", "active") + tools + footer;

app.get("/", (req,res) => {
  res.send(homePage);
});

app.get("/javascriptTheory", (req,res) => {
  res.send(javascriptTheoryPage);
});

app.get("/restAPI", (req,res) => {
  res.send(restApiPage);
});

app.get("/SSR", (req,res) => {
  res.send(ssrPage);
});

app.get("/tools", (req,res) => {
  res.send(toolsPage);
});



app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

  