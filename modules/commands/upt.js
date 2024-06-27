const axios = require('axios');
const moment = require("moment-timezone");

module.exports.config = {
  name: "upt",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "DuyVuong",
   usePrefix:false,
  description: "Random ảnh theo api - uptime",
  commandCategory: "Lệnh hệ thống",
  cooldowns: 3
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, Users }) => {

  const os = require('os');
  const IP = os.networkInterfaces();
  const userInfo = os.userInfo();
  const platform = os.platform();
  const arch = os.arch();
  const cpu_model = os.cpus()[0].model;
  const core = os.cpus().length;
  const speed = os.cpus()[0].speed;
  const byte_fm = os.freemem();
  const byte_tm = os.totalmem();
  const gb_fm = (byte_fm / (1024 * 1024 * 1024)).toFixed(2);
  const gb_tm = (byte_tm / (1024 * 1024 * 1024)).toFixed(2);
  const u_mem = ((byte_tm - byte_fm) / (1024 * 1024 * 1024)).toFixed(2);
  let gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const nodeVersion = process.version;
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const timeStart = Date.now();
  let name = await Users.getNameUser(event.senderID);
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  if (event.body && event.body == `Rác`) {
        adminBot.forEach(e => {
          api.sendMessage(`» ID: ${event.threadID}\n» Đã Yêu Cầu Phê Duyệt!`, e);
        })
        return api.sendMessage(`${hours}`, event.threadID);
      }
  const lth = (await axios.get(`https://api-1.trunghieu40.repl.co/rdfile?type=mp4`, {
     responseType: "stream"
       })).data;
   
 api.sendMessage({body:`Thời gian đã hoạt động : ${hours} giờ ${minutes} phút ${seconds} giây\nHệ điều hành : ${platform}\nKiểu Arch : ${arch}\nNode: ${nodeVersion}\nCPU : ${core} core(s) - ${cpu_model} - ${speed}MHz\nDung lượng trống : ${gb_fm}GB (Đã dùng ${u_mem}GB trên tổng ${gb_tm}GB)`, attachment: lth},event.threadID, event.messageID);

}