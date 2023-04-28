const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const app = express();
const PORT = process.env.PORT || 3001;


//middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
    console.log(`listening on port` + PORT);
});


