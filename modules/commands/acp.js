module.exports.config = {
  name: "acp",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "NTKhang",
  description: "Kết bạn qua id Facebook",
  commandCategory: "Hệ Thống",
  usages: "uid",
  cooldowns: 0
};


module.exports.handleReply = async ({ handleReply, event, api }) => {
  const { author, listRequest } = handleReply;
  if (author != event.senderID) return;
  const args = event.body.replace(/ +/g, " ").toLowerCase().split(" ");
  
  const form = {
    av: api.getCurrentUserID(),
		fb_api_caller_class: "RelayModern",
		variables: {
      input: {
        source: "friends_tab",
        actor_id: api.getCurrentUserID(),
        client_mutation_id: Math.round(Math.random() * 19).toString()
      },
      scale: 3,
      refresh_num: 0
		}
  };
  
  const success = [];
  const failed = [];
  
  if (args[0] == "add") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestConfirmMutation";
    form.doc_id = "3147613905362928";
  }
  else if (args[0] == "del") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestDeleteMutation";
    form.doc_id = "4108254489275063";
  }
  else return api.sendMessage("Vui lòng chọn <add | del > <số thứ tự | hoặc \"all\">", event.threadID, event.messageID);
  let targetIDs = args.slice(1);
  
  if (args[1] == "all") {
    targetIDs = [];
    const lengthList = listRequest.length;
    for (let i = 1; i <= lengthList; i++) targetIDs.push(i);
  }
  
  const newTargetIDs = [];
  const promiseFriends = [];
  
  for (const stt of targetIDs) {
    const u = listRequest[parseInt(stt) - 1];
    if (!u) {
      failed.push(`Không tìm thấy stt ${stt} trong danh sách`);
      continue;
    }
    form.variables.input.friend_requester_id = u.node.id;
    form.variables = JSON.stringify(form.variables);
    newTargetIDs.push(u);
    promiseFriends.push(api.httpPost("https://www.facebook.com/api/graphql/", form));
		form.variables = JSON.parse(form.variables);
  }
  
  const lengthTarget = newTargetIDs.length;
  for (let i = 0; i < lengthTarget; i++) {
    try {
      const friendRequest = await promiseFriends[i];
      if (JSON.parse(friendRequest).errors) failed.push(newTargetIDs[i].node.name);
      else success.push(newTargetIDs[i].node.name);
    }
    catch(e) {
      failed.push(newTargetIDs[i].node.name);
    }
  }
  
  api.sendMessage(`→ Đã ${args[0] == 'add' ? 'chấp nhận' : 'xóa'} lời mời kết bạn thành công của ${success.length} người:\n${success.join("\n")}${failed.length > 0 ? `\n→ Thất bại với ${failed.length} người: ${failed.join("\n")}` : ""}`, event.threadID, event.messageID);
};


module.exports.run = async ({ event, api }) => {
  const moment = require("moment-timezone");
  const fs = require("fs-extra");
  const axios = require("axios");
  const form = {
    av: api.getCurrentUserID(),
  	fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
  	fb_api_caller_class: "RelayModern",
  	doc_id: "4499164963466303",
  	variables: JSON.stringify({input: {scale: 3}})
  };
  const listRequest = JSON.parse(await api.httpPost("https://www.facebook.com/api/graphql/", form)).data.viewer.friending_possibilities.edges;
  let bodyy = "";
  let i = 0;
  let image = [];
  for (const user of listRequest) {
    let img = (await axios.get( `https://graph.facebook.com/${user.node.id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + `/cache/acp${i}.png`, Buffer.from(img, "utf-8") );
    image.push(fs.createReadStream(__dirname + `/cache/acp${i}.png`));
    bodyy += (`\n${++i}. 𝗡𝗮𝗺𝗲: ${user.node.name}\n⚙️ 𝗨𝗶𝗱: ${user.node.id}\n🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${user.node.url.replace("www.facebook", "fb")}\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${moment(user.time*1009).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm:ss")}\n`);
  };
  const msg = {
    body: `${bodyy}\n🔗 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: <𝗮𝗱𝗱 | 𝗱𝗲𝗹> <𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ | 𝗵𝗼𝗮̣̆𝗰 \"𝗮𝗹𝗹\"> đ𝗲̂̉ 𝘁𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝗵𝗮̀𝗻𝗵 đ𝗼̣̂𝗻𝗴`, 
    attachment: image
  };
  api.sendMessage(msg, event.threadID, (e, info) => {
      global.client.handleReply.push({
        name: this. config. name,
        messageID: info.messageID,
        listRequest,
        author: event.senderID
      });
    }, event.messageID);
};