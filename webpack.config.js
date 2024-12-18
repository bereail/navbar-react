const path = require('path');

module.exports = {
  // Punto de entrada (el archivo principal de tu aplicación)
  entry: './src/index.js',  // Cambia esto si tu punto de entrada está en otro archivo

  // Punto de salida (donde se generarán los archivos)
  output: {
    path: path.resolve(__dirname, 'build'),  // La carpeta donde se guardará el bundle
    filename: 'bundle.js',                   // Nombre del archivo final
  },

  module: {
    rules: [
      {
        test: /\.js$/,                        // Para todos los archivos .js
        exclude: /node_modules/,              // Excluye node_modules
        use: {
          loader: 'babel-loader',             // Usa Babel para transpilar el código
        },
      },
      {
        test: /\.css$/,                       // Para todos los archivos .css
        use: ['style-loader', 'css-loader'],  // Usa los loaders para cargar CSS
      },
    ],
  },

  // Para generar un mapa de fuente para la depuración
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],  // Para poder importar .js y .jsx sin especificar la extensión
  },
};
