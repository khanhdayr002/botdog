module.exports.config = {
 name:"vdanime",
  verison:"1.0.0",
  hasPremssion: 0,
  credit: "",
  description: "Video ",
  commandCategory: "giải trí",
  usages: "video",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const trhieu = (await axios.get(`https://api-1.trunghieu40.repl.co/rdfile?type=mp4`, {
     responseType: "stream"
       })).data;
          api.sendMessage({
             body: ``,attachment: trhieu},event.threadID, event.messageID); 
}