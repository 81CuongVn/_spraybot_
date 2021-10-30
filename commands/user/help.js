const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `help`,
        aliases: [`help`, `помощь`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let embed = new MessageEmbed()
            .setAuthor(`SprayBot`)
            .setColor(`RANDOM`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`Команды:`, `https://aiharistudio.xyz/commands.html`);
        message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
    }
}