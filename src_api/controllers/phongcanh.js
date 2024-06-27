const { errorHandler } = require("../utils");

exports.phongcanh = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../phongcanh.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"mhieu", "count": "159", "data":`${link}`});
};