const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = require("something-random-on-discord").Random

module.exports = {
    config: {
        name: `ударить`,
        aliases: [`ударить`, `punch`]
    },
    
  run: async (bot, message, args) => {
    message.delete();
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("punch");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setAuthor(`SprayBot`)
    .setTitle(`${message.author.username} ударил(-а) ${target.user.username}`)
    .setColor("RANDOM")
    .setTimestamp()
    
    message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
  }
};
