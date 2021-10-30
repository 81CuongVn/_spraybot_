const { MessageEmbed } = require('discord.js');
const db = require('quick.db');


module.exports = {
    config: {
        name: `setnick`,
        aliases: [`setnick`]
    },

    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**У вас недостаточно прав**");

        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("**У меня недостаточно прав**");
      
        if (!args[0]) return message.channel.send("**Пожалуйста, укажите участника**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.channel.send("**Пожалуйста, укажите никнейм, на который вы хотите изменить**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Невозможно изменить ник данного участника**')

        if (!args[1]) return message.channel.send("**Пожалуйста, укажите никнейм, на который вы хотите изменить**");

        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`SprayBot`)
            .setDescription(`**Ник был успешно изменён!**`)
        message.channel.send(embed)
    } catch (error) {
      message.channel.send(`Ошибка!!`).then(m => (m.delete({timeout: 10000})))
        

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;


    }
}
}