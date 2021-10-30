const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `bot`,
        aliases: [`bot`, `бот`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let embed = new MessageEmbed()
            .setTitle(`Информация о боте`)
            .setColor(`RANDOM`)
            .setAuthor(`SprayBot`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`Версия:`, `1.0.5`, true)
            .addField(`Последнее обновление:`, `22.10.2021`, true)
            .addField(`Сайт:`, `https://aiharistudio.xyz    `, true)
            .setDescription(`Бота написал: **Aihari#0009**`)
        message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
    }
}
