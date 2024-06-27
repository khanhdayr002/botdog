const fs =require('fs')
function base64_encode(file) {
  try {
    var bitmap = fs.readFileSync(__dirname + file);
    var d = (bitmap).toString('base64')
    return d
  } catch (e) {  }
}
exports.view = async (req, res, next) => {
  const fs = require('fs')
  const path = require('path')
  const { type, data, code } = req.query;
  var type1 = ["mp4", "mp3","image"]
  if(!type1.includes(type)) return res.jsonp({
    err: 'sai type'
  })
  var filename = code.split(".")
  console.log(filename)
 // var file = fs.createReadStream(__dirname + "/cache/" + filename[0] + "." + filename[1])
  const oix = base64_encode("/cache/" + filename[0] + "." + filename[1])
  var iox = Buffer.from(oix, "base64");
  switch(type) {
    case "mp4":{
  res.writeHead(200, {
    'Content-Type': 'video/mp4',
     "Content-Length": iox.length
  });
   res.end(iox);
    }
    case "mp3":{
     res.writeHead(200, {
    'Content-Type': 'audio/mp3',
  "Content-Length": iox.length
  });
   res.end(iox);
    }
    case "image":{
      res.writeHead(200, {
    'Content-Type': 'image/png',
 "Content-Length": iox.length
  });
   res.end(iox);
    }
  }
};