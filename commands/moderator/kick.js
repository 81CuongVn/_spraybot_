const Discord = require('discord.js');

module.exports = {
    config: {
        name: `kick`,
        aliases: [`kick`, `кик`]
    },

    async run (client, message, args) {
        message.delete()

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Не трогай эту команду!').then(m => (m.delete({timeout: 10000})));
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('У меня недостаточно прав.').then(m => (m.delete({timeout: 10000})));

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Укажите пользователя.').then(m => (m.delete({timeout: 10000})));

        if(!member) return message.channel.send('Не удалось найти данного пользователя, возможно это **П У С Т О Т А**').then(m => (m.delete({timeout: 10000})));
        if(!member.kickable) return message.channel.send('Не удалось кикнуть данного пользователя, т.к. у него больше прав, чем у вас.').then(m => (m.delete({timeout: 10000})));

        if(member.id === message.author.id) return message.channel.send('Даже не пробуй себя кикнуть!').then(m => (m.delete({timeout: 10000})));

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Причина не была указана';

        member.kick({ reason: `${reason}` }).catch(err => { 
          message.channel.send('ЕРРОР ЛДПИВЛИТЬЫВЛТЬЗ!!!!').then(m => (m.delete({timeout: 10000})));
            console.log(err)
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Пользователь кикнут!')
        .setAuthor(`SprayBot`)
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Пользователь', member)
        .addField('Администратор', message.author)
        .setColor("RANDOM")
        .addField('Причина', reason)
        .setTimestamp()

        message.channel.send(banembed).then(m => (m.delete({timeout: 10000})));


    }
}