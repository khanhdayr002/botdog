require('axios').post("https://fefe.mhieu14012008.repl.co/up",{
  type: "mp4",
  data: "https://i.imgur.com/CYAySrg.mp4",
  code: "12345"
}).then(({data}) => {
  console.log(data)
})