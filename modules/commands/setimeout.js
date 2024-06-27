module.exports.config = {
	name: "settimeout",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "itzHAKIRA",
	description: "",
	commandCategory: "ADMIN",
	usages: "",
	cooldowns: 5
};
const { readFileSync, writeFileSync, unlinkSync, createReadStream, existsSync } = require("fs-extra");
const moment = require("moment-timezone");
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
const { join } = require('path');
const pathData = join(__dirname, "cache", "settimeout.json");
const path = __dirname + '/cache/settimeout.json';
module.exports.onLoad = function({ }) {
  if (!existsSync(path)) return writeFileSync(path, "[]", "utf-8");
}
module.exports.handleEvent = async ({ api, event, args }) => {
  var { senderID, threadID, messageID } = event;
  var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var listthreadID = dataJson.filter(item => item.date == timeNow);
  var list = dataJson.filter(item => item.date !== timeNow);
  for(let i = 0; i < listthreadID.length; i++){
    setTimeout(() => {
      api.sendMessage('Hôm nay ' + timeNow + ' là ngày ra đi của bot theo lệnh của admin TvT', listthreadID[i]["threadID"], () => {
         api.removeUserFromGroup(api.getCurrentUserID(), listthreadID[i]["threadID"]) 
      })
      
    },3000)
  }
  writeFileSync(pathData, JSON.stringify(list, null, 4), "utf-8");
};

module.exports. run = async ({ api, event, args }) => {
  var { senderID, threadID, messageID } = event;
  var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var thread = args[1] || threadID;
  if(!args[0].includes('/')) return api.sendMessage("Sai định dạng ngày\nĐịnh dạng đúng DD/MM/YYYY", threadID, messageID)
   var userData = dataJson.find(item => item.threadID == threadID) || { date: args[0], threadID: threadID}
  if(!userData) return api.sendMessage('Bạn đã từng thêm nhóm này vào danh sách đợi bot out', threadID);
  console.log(userData)
  dataJson.push(userData);
  writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
  api.sendMessage('Đã thêm nhóm vào danh sách đợi bot out', threadID);
};