const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = require("something-random-on-discord").Random

module.exports = {
    config: {
        name: `погладить`,
        aliases: [`погладить`, `pat`]
    },
  run: async (client, message, args) => {
    message.delete();
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("pat");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setAuthor(`SprayBot`)
    .setColor("RANDOM")
    .setTitle(`${message.author.username} погладил(-а) ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
  }
};