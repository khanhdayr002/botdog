const { errorHandler } = require("../utils");

exports.tet = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../tet.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"mhieu","count":"28","data":`${link}`});
};