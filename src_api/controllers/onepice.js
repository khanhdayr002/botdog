const { errorHandler } = require("../utils");

exports.onepice = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../onepice.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"mhieu","url":`${link}`});
};