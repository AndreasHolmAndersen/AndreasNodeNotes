const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));




app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });