const fs = require("fs"); const path = require("path");

module.exports = { name: "antihack", alias: ["defense", "protection"], category: "sécurité", description: "Détecte et bloque les scripts ou commandes de piratage (Termux/Linux)", async execute(message, args, { sendText }) { try { const suspectDirs = [ "/data/data/com.termux/files/home", "/sdcard/Download", "/tmp", "./" ];

const dangerousPatterns = [ /rm\s+-rf\s+\//i, /curl\s+http/i, /wget\s+http/i, /chmod\s+\+x/i, /bash\s+/i, /eval\s+/i, /\.sh\b/i, /keylogger/i ]; let report = "\uD83D\uDEE1️ Scan de sécurité en cours...\n\n"; let threatsFound = 0; for (const dir of suspectDirs) { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); if (fs.lstatSync(filePath).isFile()) { const content = fs.readFileSync(filePath, "utf8"); for (const pattern of dangerousPatterns) { if (pattern.test(content)) { threatsFound++; fs.unlinkSync(filePath); report += `❌ Script dangereux supprimé : ${filePath}\n`; break; } } } } } } report += threatsFound ? `\n✅ ${threatsFound} menace(s) éliminée(s).` : "Aucune menace détectée."; await sendText(report); } catch (error) { console.error(error); await sendText("Une erreur est survenue pendant l'analyse."); } 

} };
