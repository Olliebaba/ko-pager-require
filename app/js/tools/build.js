{
    "appDir": "../../",
    "baseUrl": ".",
    "dir": "../../../dist",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    // "optimize": "none",

    // point to the shim config we set up before
    "mainConfigFile": "../../main.js",

    "modules": [
        //Optimize the application files. jQuery and the plugins will be included
        //automatically, as they are dependencies of app.js.
        {
            "name": "main"
        }
    ]
}
