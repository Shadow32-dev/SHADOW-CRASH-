//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CypherX
// @author : •᭄۝ ✰•𝕸𝕽✰𝕭𝕷𝕬𝕮𝕶✰𝕲𝕺𝕶𝖀✰•۝❐᭄
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/
// @github : Dark-Xploit
// @tiktok : COLOMBE KANDA
// @whatsapp : +243899295851

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
//File System module - because even bots need to read and write💁‍♂️
const { color } = require('./lib/color')
//Colouring console because plain text is quite boring😑
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
// You know the drill. Put your shadow-crash session id here. Should look like: XPLOADER-BOT:~ (don't forget that, it's crucial!)

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'Shadow-crash' 
// Pick a name for the bot. Default is "shadow-crash" — but who doesn’t love a cool bot name?

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '243899295851' 
// Your personal contact number. If you want to call Tylor, this is the number. 👀

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Mr black' 
// Set your name, currently it's the mastermind's. The one and only... Tylor. (Don't ask how I got here, it's a mystery.)

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Kurushimi" 
// Time to decide the name for your sticker pack. This will appear every time you create a sticker. "Cypher" is the default because... well, why not?

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "X" 
// Who's the artist behind those epic stickers? You, of course! Unless you're just using the default name "X" – mystery vibes!

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/RDcongo" 
// The bot is time-traveling. Set the timezone correctly. Trust us, you don't want the bot to get confused. 🕒

//--------------[ POSTGRES DATABASE ]----------------//

global.postgresqls = process.env.DATABASE_URL || "";
// Your database URL. If you're using panel, no need to fill, if you're using Heroku, this will be automatically filled. Let the magic happen!

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"
// Where does the journey end? Maybe an Instagram link? Or WhatsApp link🤔 Or maybe just a placeholder. Who knows? 👀

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©CypherX is on fire!🔥"
// Add a watermark finished tasks because... every masterpiece needs a signature.

//---------------------[ REPLIES ]-----------------------//
global.mess = { 
  done: '✅ *Mission Accomplished!* All systems go, shadow-crash finished the task!',
  success: '🎉 *BOOM! Success!* shadow-crash is too cool for this world. We did it!',
  owner: '🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!',
  group: '👥 *Join the club!* This feature is exclusive to group chats!',
  admin: '🔒 *Admin powers required!* Make me an admin, and I’ll unlock this magic for you.',
  notadmin: '⚠️ *Not Quite There Yet!* You gotta be the admin to wield this feature. Better start begging!',
//new
  error: '🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!',
  wait: '⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.)',
  nolink: '🔗 *Link not found!* Did you forget to include it, or are you just testing me?',
  notext: '🤔 *No query detected!* Did you forget to include it, or are you just testing me?',
  ban: '🚨 *Banned!* You’ve been banished to the shadow realm. (Don’t worry, it’s not permanent... probably.)',
  unban: '🎈 *Unbanned!* Welcome back! We missed you... kind of.'
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! Or I’ll send Shadow-crash after you... 😈 */

//😹😹🙆‍♂️
// botz = m (Not to be confused with 'The bot'... he's cooler.)
// isOwner = 🤔 (But only on special days... we keep it mysterious)
// isShadowAdmin = 🗿 (Admin powers are granted by shadow-crash, no exceptions!)


//--------------------[ WATCHER ]-----------------------//
// Who’s watching the watchers? 🤔
// Let’s keep track of any changes like a hawk in a top hat. 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red')) 
  delete require.cache[file]
  require(file)
})

//----------------------[ CYPHER-X ]----------------------//
// Shadow is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// black Goku ? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.
