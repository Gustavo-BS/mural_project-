const express = require("express");
const path = require("path");
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 5000;

app.use("/api", apiRoutes);
app.use("/", express.static(path.join(__dirname, "public")));



app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`);
});

