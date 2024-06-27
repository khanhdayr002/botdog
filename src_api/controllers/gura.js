const { errorHandler } = require("../utils");

exports.gura = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../gura.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"HieuSimpRin","data":`${link}`});
};