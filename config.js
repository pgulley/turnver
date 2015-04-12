var config;
if(process.env.NODE_ENV === 'production') {
    //Production environment variables
    console.log("in production");
    config = {
        "request_timeout":2200,
        "port":process.env.PORT,
        "app_name":process.env.APP_NAME.toString(),
        "URL":process.env.URL
    }
}
else {
    //Development environment variables
    config = {
        "port":3000,
        "URL":"https://localhost:3000",

    }
};
module.exports = config;