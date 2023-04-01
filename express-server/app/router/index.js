const express = require("express");
const router = express.Router();


module.exports = (app, io) => {
    app.use(router);

    router.post('/broadcaster', (req, res) => {
        console.log("|Router|broadcaster|");
        const { msg } = req.body;

        const response = {
            code: "0001",
            msg,
        }

        io.emit("broadcaster", response);

        return res.json({ code: "0001",  msg: "Send message successfully." });
    });

    router.post('/emergency', (req, res) => {
        console.log("|Router|emergency|");
        const { msg } = req.body;

        const response = {
            code: "5001",
            tag: "emergency",
            msg,
        }

        io.emit("broadcaster", response);

        return res.json({ code: "0001",  msg: "Send message successfully." });
    });

    


};