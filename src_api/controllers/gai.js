const { errorHandler } = require("../utils");

exports.gai = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../gai.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"HieuSimpRin","count":"500","data":`${link}`});
};