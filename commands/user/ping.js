const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ping`,
        aliases: [`ping`, `пинг`]
    },
    run: async (bot, message, args) => {
        message.delete();
        let embed = new MessageEmbed()
            .setTitle(`Pong!`)
            .setColor(`RED`)
            .setAuthor(`SprayBot`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .addField(`Ping:`, `**${Date.now() - message.createdTimestamp}ms**`)
            .setTimestamp()
            message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
            }
        }