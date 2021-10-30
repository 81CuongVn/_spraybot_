const Discord = require('discord.js');

module.exports = {
    config: {
        name: `ban`,
        aliases: [`ban`, `бан`]
    },

    async run (client, message, args) {
        message.delete()

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Не трогай эту команду!').then(m => (m.delete({timeout: 10000})));
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('У меня недостаточно прав.').then(m => (m.delete({timeout: 10000})));

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Укажите пользователя.').then(m => (m.delete({timeout: 10000})));

        if(!member) return message.channel.send('Не удалось найти данного пользователя, возможно это **П У С Т О Т А**').then(m => (m.delete({timeout: 10000})));
        if(!member.bannable) return message.channel.send('Не удалось кикнуть данного пользователя, т.к. у него больше прав, чем у вас.').then(m => (m.delete({timeout: 10000})));

        if(member.id === message.author.id) return message.channel.send('Даже не пробуй себя забанить!').then(m => (m.delete({timeout: 10000})));

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Причина не была указана';

        member.ban({ reason: `${reason}` }).catch(err => { 
          message.channel.send('Ошибка!!').then(m => (m.delete({timeout: 10000})));
            console.log(err)
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Пользователь забанен!')
        .setAuthor(`SprayBot`)
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Пользователь', member)
        .addField('Администратор', message.author)
        .setColor("RANDOM")
        .addField('Причина', reason)
        .setTimestamp()

        message.channel.send(banembed).then(m => (m.delete({timeout: 10000}))); {
        }
        


    }
}