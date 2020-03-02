const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        ciao: "ciao"
    });
});

app.post("/post", (req, res) => {
    console.log(req.body);
});

app.listen(5000, () => {
    console.log("listening on http://localhost:5000");
});
