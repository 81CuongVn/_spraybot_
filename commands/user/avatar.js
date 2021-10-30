const Discord = require("discord.js")

module.exports = {
    config: {
        name: `avatar`,
        aliases: [`avatar`, `аватар`]
    },

    run: async(client,message,args) => {
        message.delete();
   let user;
   if(!args[0]) user = message.author
   if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
   if(args[0] && !isNaN(args[0])){
       user = client.users.cache.get(args[0])

       if(!message.guild.members.cache.has(args[0])) return message.reply("Не удалось найти участника.").then(m => (m.delete({timeout: 10000})));

   }

   if(!user.avatarURL()) return message.reply(`Аватарка недоступна или же её нет.`).then(m => (m.delete({timeout: 10000})));
   let embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
   .setTimestamp()
   .setAuthor(`SprayBot`)

   message.channel.send(embed).then(m => (m.delete({timeout: 20000})));
}
}