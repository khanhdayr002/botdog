const { errorHandler } = require("../utils");

exports.animevd = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../anime.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"HieuSimpRin","Contact":"https://www.facebook.com/User.HieuSimpRin","count": "500","data":`${link}`});
};