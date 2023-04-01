const { account:accountCtl } = require('../controller');

module.exports = (io) => {
    io.on('connect', client => {
        client.emit("message", "Welcome to ParaZeni!");
        // example Login
        client.on("login", async (msg) => {
            console.log("|SOCKET| login");
            accountCtl.login(msg, (response) => {
                io.emit("login-response", response);
            });
        })

    })

};