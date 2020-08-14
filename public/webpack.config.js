const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const config = {
    entry: "/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new WebpackPwaManifest({
            name: "Online Offline Budget Tracker",
            short_name: "Budget Tracker",
            description: "An application that allows you to track your budget",
            background_color: "White",
            theme_color: "Black",
            "theme-color": "Black",
            start_url: "/",
            icons: [{
                src: path.resolve("/icons/icon-192x192.png"),
                src: path.resolve("/icons/icon-512x512.png"),
                sizes: [192, 512],
                destination: path.join("icons")
            }]
        })
    ]
};
module.exports = config;