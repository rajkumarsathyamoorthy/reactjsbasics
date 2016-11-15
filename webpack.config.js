var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index1.js',
   },

   devServer: {
      inline: true,
      port: 4444
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react'],
               plugins: ['transform-object-rest-spread']
            }
         }
      ]
   }
}

module.exports = config;
