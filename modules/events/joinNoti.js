module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "CatalizCS",
  description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage(` Nhóm bạn chưa được duyệt để gửi yêu cầu ` + global.config.PREFIX + `request\n➝ Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.\n➝ Prefix hiện tại khả dụng là: ` + global.config.PREFIX + `\n➝ Liên hệ admin qua`, threadID);
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif", "random");
      const pathGif = join(path, `hi.gif`);
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      const axios = require('axios')
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "Xin chào {name} tới với nhóm {threadName}\n────────────────\nFacebook: https://www.facebook.com/profile.php?id={iduser}\n{type} là thành viên thứ {soThanhVien} của nhóm\nĐược thêm vào nhóm bởi: {author}\n{time}": msg = threadData.customJoin;
      msg = msg
            var nameAuthor = await Users.getNameUser(event.author)
               msg = msg
                 .replace(/\{iduser}/g, iduser.join(', '))
                 .replace(/\{name}/g, nameArray.join(', '))
                 .replace(/\{type}/g, (memLength.length > 1) ? 'Các cậu' : 'Cậu')
                 .replace(/\{soThanhVien}/g, memLength.join(', '))
                 .replace(/\{threadName}/g, threadName)
                 .replace(/\{author}/g, nameAuthor)
                 .replace(/\{session}/g, hours <= 10 ? "sáng" : 
                 hours > 10 && hours <= 12 ? "trưa" :
                 hours > 12 && hours <= 18 ? "chiều" : "tối")
                 .replace(/\{time}/g, time);
      if (existsSync(path)) mkdirSync(path, { recursive: true });
      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
      const trhieu = (await axios.get(`https://api-1.trunghieu40.repl.co/rdfile?type=mp4`, {
         responseType: "stream"
           })).data;
      if (existsSync(pathGif)) formPush = { body: msg, attachment: trhieu}
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: trhieu}
      }
      else formPush = { body: msg,  attachment: trhieu}

      return api.sendMessage(formPush, threadID);

    } catch (e) { return console.log(e) };
  }
  }