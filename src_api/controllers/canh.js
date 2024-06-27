const { errorHandler } = require("../utils");

exports.canh = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../femdom.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"mhieu","count": "159", "data":`${link}`});
};