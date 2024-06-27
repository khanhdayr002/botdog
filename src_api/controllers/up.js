exports.up = async (req, res, next) => {
  const fs = require('fs')
  const axios = require('axios')
  const { type, data, code } = req.body;
  var type1 = ["mp4", "mp3","image"]
  if(!type1.includes(type)) return res.jsonp({
    err: 'sai type'
  })
 var t =  (type == 'image' ? 'jpeg' : type == "mp4" ? 'mp4': 'mp3')
 let dlw = (await axios.get(`${encodeURI(data)}`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/cache/` + code + "." + t, Buffer.from(dlw, "utf-8"));
//set res status
res.status(200).jsonp({
    data: "api-anime.lth1111.repl.co/view" + code + "." + t
})
};