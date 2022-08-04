# webPack_test

npm init -y npm install webpack webpack-cli --save-dev

создать index.html и папку src а так-же файл index.js в этой папке. создайте
файл webpack.config.js в этом файле. ===================== const path =
require('path');

module.exports = { entry: './src/index.js', output: { filename: 'main.js',
path:path.resolve(\_\_dirname, '*имя*папки'), }, };
