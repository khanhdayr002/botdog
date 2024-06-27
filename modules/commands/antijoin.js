module.exports.config = {
 name: "antijoin",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Cấm thành viên mới vào nhóm",
 usages: "",
 commandCategory: "Dành Cho Qtv",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
   const timeStart = Date.now();
  const dcm = process.uptime();
  var hieu = Math.floor(dcm / (60 * 60));
  var simp = Math.floor((dcm % (60 * 60)) / 60);
  var rin = Math.floor(dcm % 60);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage({body:`=====『 𝐀𝐧𝐭𝐢𝐉𝐨𝐢𝐧 』=====\n◆━━━━━━━━━━━━━◆\n𝐁𝐨𝐭 𝐜𝐚̂̀𝐧 𝐪𝐮𝐲𝐞̂̀𝐧 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦\n𝐁𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hieu} 𝐆𝐢𝐨̛̀ ${simp} 𝐏𝐡𝐮́𝐭 ${rin} 𝐆𝐢𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anime.tka12340.repl.co/video/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,event.messageID)
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage({body:`=====『 𝐀𝐧𝐭𝐢𝐉𝐨𝐢𝐧 』=====\n◆━━━━━━━━━━━━━◆\n${(data.newMember == true) ? "𝐁𝐚̣̂𝐭" : "𝐭𝐚̆́𝐭"} 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐚𝐧𝐭𝐢𝐣𝐨𝐢𝐧 ( 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐜𝐡𝐨̂́𝐧𝐠 𝐬𝐮́𝐜 𝐯𝐚̣̂𝐭 𝐯𝐚̀𝐨 𝐛𝐨𝐱 ) )\n𝐁𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hieu} 𝐆𝐢𝐨̛̀ ${simp} 𝐏𝐡𝐮́𝐭 ${rin} 𝐆𝐢𝐚̂𝐲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anime.tka12340.repl.co/video/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,event.messageID)
}