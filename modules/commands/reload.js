const axios = require("axios");
const moment = require("moment-timezone");

module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Chill with Tea",
	description: "Khởi động lại Bot",
	commandCategory: "Tiện ích",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const permission = ["100086415765506"];
	if (!permission.includes(event.senderID))
		return api.sendMessage("《Muốn reload sao ừ bạn không đủ tuổi》", event.threadID, event.messageID);

	const { commands } = global.client;
	const { threadID } = event;

	const picture = (await axios.get(`https://i.imgur.com/I5AHe6h.jpeg`, { responseType: "stream" })).data;
	const trunghieu = (await axios.get(`https://i.imgur.com/KHBwPzO.jpeg`, { responseType: "stream" })).data;

	var time = args.join(" ");
	var rstime = time ? time : "19";

	api.sendMessage(
		{
			body: `===[ 𝐑𝐄𝐋𝐎𝐀𝐃 ] ===\n━━━━━━━━━━━━━━━━━━\n𝐕𝐚̀𝐨 𝐥𝐮́𝐜:\n${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")}\n[𝗕𝗼𝘁] => 𝗦𝗲̃ 𝗿𝗲𝗹𝗼𝗮𝗱 𝗹𝗮̣𝗶 𝗯𝗼𝘁 𝘀𝗮𝘂 ${rstime} 𝗴𝗶𝗮̂𝘆 𝗻𝘂̛̃𝗮\n𝐓𝐨̂̉𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭 :${commands.size}\n━━━━━━━━━━━━━━━━━━\n`,
			attachment: trunghieu
		},
		threadID
	);

	setTimeout(() => {
		api.sendMessage(
			{
				body: "[𝗕𝗼𝘁] => 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝗹𝗼𝗮𝗱 𝗕𝗼𝘁 !",
				attachment: picture
			},
			event.threadID,
			() => process.exit(1)
		);
	}, rstime * 1000);
};
