// autonom.js
module.exports = {
    name: 'autonom',
    description: 'Se nommer automatiquement admin',
    execute: async (client, message) => {
        const groupAdmins = await message.getGroupAdmins(); // Obtenir les admins du groupe
        if (!groupAdmins.includes(message.sender)) {
            await message.promoteAdmin(message.sender); // Promotion automatique en admin
            message.reply('Vous êtes maintenant admin !');
        } else {
            message.reply('Vous êtes déjà admin.');
        }
    }
};
