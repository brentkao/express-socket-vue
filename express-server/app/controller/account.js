exports.login = (msg, send) => {
    //step to deconstruct the msg
    const { account, password } = msg;

    try {
        if (account !== "account01") throw "account err";
        if (password !== "password1234") throw "password err";

        const response = {
            code: "lg-0001",
            msg: "Login Success!! \n Welcome to ParaZeni World ~",
            data:{}
        }

        send(response);
        
    } catch (error) {
        //! error response
        const response = {
            code: "lg-9001",
            msg: error,
            data:{}
        }

        send(response);
    }


}