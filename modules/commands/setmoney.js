module.exports.config = {
    name: "setmoney",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "CatalizCS mod by BraSL",
    description: "",
    commandCategory: "Dành Cho Admin",
    usages: "[reply/tag/id]",
    cooldowns: 0
    
};
module.exports.run = async function ({ event, api, Currencies, args }) {
    const { threadID, messageID, senderID, mentions, type, messageReply } = event;
  const { throwError } = global.utils;
  const mentionID = Object.keys(event.mentions);
  const money = parseInt(args[0]);
  const tag = parseInt(args[1])

  var message = [];
  var error = [];
  

    if(money){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
      else if (Object.keys(mentions).length > 0) {
        uid = Object.keys(mentions)[0];
    }
    else uid = event.senderID;
      var name = global.data.userName.get(uid)
   if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
        try {
          await Currencies.setData(uid, { money });
          message.push(uid);
        } catch (e) { error.push(e) };
        return api.sendMessage(`➩ Đã thay đổi số dư của ${name} thành ${money}$`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Không thể set tiền cho ${name}`, threadID) }, messageID);
      }
  
}
