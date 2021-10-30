const discord = require("discord.js");

module.exports = {
    config: {
        name: `test`,
        aliases: [`test`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let embed = new discord.MessageEmbed()
        .setAuthor(`SprayBot`)
        .setColor("RANDOM")
        .setTitle(`I love Touhou Project`)
        .setTimestamp();
        message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
    }
    
};