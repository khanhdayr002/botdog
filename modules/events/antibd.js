module.exports.config = {
  name: "antibdbot",
  eventType: ["log:user-nickname"],
  version: "0.0.1",//beta
  credits: "ProCoderCyrus",
  description: "Chống đổi biệt danh của Bot"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
  const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    var botID = api.getCurrentUserID();
    var { PREFIX, BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(`『 ${prefix} ] • ${global.config.BOTNAME}`, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `[ 𝗠𝗢𝗗𝗘 ] → Hiện tại đang kích hoạt chế độ cấm đổi tên Bot`}, threadID);
    }  
}