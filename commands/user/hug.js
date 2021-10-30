const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = require("something-random-on-discord").Random

module.exports = {
    config: {
        name: `обнять`,
        aliases: [`обнять`, `hug`]
    },
    
  run: async (bot, message, args) => {
    message.delete();
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("hug");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setAuthor(`SprayBot`)
    .setColor("RANDOM")
    .setTitle(`${message.author.username} обнял(-а) ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
  }
};