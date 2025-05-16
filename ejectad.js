// ejectad.js
module.exports = {
    name: 'ejectad',
    description: 'Éjecter l\'admin principal du groupe',
    execute: async (client, message) => {
        try {
            // Obtenir les administrateurs du groupe
            const groupAdmins = await message.getGroupAdmins();
            const creatorId = message.group.creator; // ID de l'admin principal (créateur du groupe)
            
            // Vérifier si l'utilisateur est l'admin principal ou non
            if (message.sender === creatorId) {
                message.reply('Vous ne pouvez pas vous éjecter vous-même.');
            } else if (groupAdmins.length <= 1) {
                message.reply('Il doit toujours y avoir au moins un admin dans le groupe.');
            } else {
                await message.demoteAdmin(creatorId); // Éjecte l'admin principal
                message.reply('L\'admin principal a été éjecté.');
            }
        } catch (error) {
            console.error(error);
            message.reply('Une erreur s\'est produite. Veuillez réessayer.');
        }
    }
};
