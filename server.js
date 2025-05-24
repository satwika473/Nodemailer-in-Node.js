const fs=require('fs')
fs.writeFileSync("f1.txt","Hiii")
//console.log(fs.readFileSync("server.js","utf8"))
fs.writeFileSync('f1.txt',"bye")
fs.appendFileSync('f1.txt',"bye")
fs.appendFileSync('f1.txt',"bye")

fs.unlinkSync('f1.txt')
