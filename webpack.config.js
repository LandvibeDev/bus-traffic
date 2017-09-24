module.exports = {
    entry: {
        "index" : './index.js'
    },
    output: {
        path: __dirname + '/bundle/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
         {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
         },
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             options: {
               presets: ['env', "stage-2"]
             }
           }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};