const path = require('path');

module.exports = (env) => {

  // Use env.<YOUR VARIABLE> here:
  console.log('Goal:', env.goal); // 'local'
  console.log('Production', env.production); // true

  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};