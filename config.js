// Base By Mr black Goku 
// do not remake this script without giving me credit.

const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["243899395851@s.whatsapp.net"]
global.nomerOwner = "243970637157"
global.nomorOwner = ['243899295851']
global.namaDeveloper = "𝗞ɪ𝗻ɢ 𝗝ᴜɪ𝗰𝗲" //jangn diubh bng
global.namaOwner = "𝗞ɪ𝗻ɢ 𝗝ᴜɪ𝗰𝗲"
global.namaBot = "⸙═᪣Shadow crash 𝘃𝟭🌹᭄"
global.versionBot = "𝟭.𝟬.𝟬"
global.packname = "⸙═᪣𝗦hadow 𝗖ʀᴀ𝘀𝗵ᴇʀ 𝘃𝟭🌹᭄"
global.author = "𝗞ɪ𝗻ɢ 𝗝ᴜɪ𝗰𝗲"
global.thumb = fs.readFileSync("./shadow.jpg")
global.ThM = 'https://files.catbox.moe/30gspu.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
