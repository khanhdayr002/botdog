const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  res.json({ "Authors":"HieuSimpRin","Contact":"https://www.facebook.com/User.HieuSimpRin",});
  const chalk = require('chalkercli');
  const rainbow = chalk.rainbow(`
======================================================
╏                                                    ╏
╏                                                    ╏
╏                  Rin Tohsaka                       ╏
╏                                                    ╏
╏                                                    ╏
╏            𝐍𝐀𝐌𝐄 : Trung Hiếu                      ╏
╏            𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘: 16/03/2004                   ╏
╏            𝐆𝐈𝐓𝐇𝐔𝐁: HieuSimpRin                     ╏
╏            𝐙𝐀𝐋𝐎 : 0868250736                       ╏
╏            𝐅𝐁 : m.me/100086415765506               ╏
╏                                                    ╏
======================================================

◆━━━━━━━━━━━━◆『 HieuSimpRin 』◆━━━━━━━━━━━━◆`).stop();
};
