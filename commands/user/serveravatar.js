const discord = require("discord.js")

module.exports = {
  config: {
      name: `serveravatar`,
      aliases: [`serveravatar`, `сервераватар`, `avatarserver`]
  },
  run: async (client, message, args) => {
    message.delete();

    let embed = new discord.MessageEmbed()
    
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
      embed.setAuthor(`SprayBot`)
    
      message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
    
  }
}