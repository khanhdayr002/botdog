module.exports.config = {
 name:"anime",
  verison:"1.0.0",
  hasPremssion: 0,
  credit: "Daniel",
  description: "",
  usePrefix:false,
  commandCategory: "giải trí",
  usages: "",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  var lth = ["1", "2", "5", "3", "4", "6"];
  const ais = lth[Math.floor(Math.random() * lth.length)];

  const res = await axios.all([
    axios.get("https://hieusimprin-1.lth1111.repl.co/api/siesta.php"),
      axios.get("https://hieusimprin-1.lth1111.repl.co/api/nino.php"),
      axios.get("https://hieusimprin-1.lth1111.repl.co/api/rintohsaka.php"),
      axios.get("https://hieusimprin-1.lth1111.repl.co/api/shikimori.php"),
      axios.get("https://hieusimprin-1.lth1111.repl.co/api/saber.php"),
      axios.get("https://hieusimprin-1.lth1111.repl.co/api/takina.php")
  ]);

  let array = [];
  for (let i = 0; i < ais; i++) {
    const a = res[Math.floor(Math.random() * res.length)].data.data;
     const downloadfile = (await axios.get(a, { responseType: 'stream' })).data;
    array.push(downloadfile);
  }
          api.sendMessage({
             body: ``,attachment: array},event.threadID, event.messageID); 
}