const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    },

 /*   module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: ['node_modules'],
            use: ['babel-loader'],
          },
        ],
},*/
module: {
    rules: [
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(jpg|png)$/i,
            type: 'asset/resource',
        },
        /*{
            test: /\.jsx?$/,
            exclude: ['node_modules'],
            use: ['babel-loader'],
        }*/
    ]
}

};