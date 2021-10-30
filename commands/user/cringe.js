const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `cringe`,
        aliases: [`cringe`, `кринж`]
    },
    run: async (bot, message, args) => {
        message.delete()
        message.channel.send(`${message.author}  **кринжанул(-а)** 🤮`).then(m => (m.delete({timeout: 10000})));
    }
};