const fs =require('fs')
function base64_encode(file) {
  try {
    var bitmap = fs.readFileSync(__dirname + file);
    var d = (bitmap).toString('base64')
    return d
  } catch (e) {  }
}
exports.randomfile = async( req, res, next ) => {
  const { type, data, code } = req.query;
  const listFile = fs.readdirSync(__dirname + '/cache')
  var type1 = ["mp4", "mp3","image"]
  if(type == "image") var t = "jpg"
  else var t = type;
  if(!type1.includes(type)) return res.jsonp({err: "cmm beo"})
  var file = listFile.filter(x => x.endsWith(t))
  var file1 = file[Math.floor(Math.random() * file.length)]
 const oix = base64_encode("/cache/" + file1)
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
}