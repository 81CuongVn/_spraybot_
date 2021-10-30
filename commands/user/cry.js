const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = require("something-random-on-discord").Random

module.exports = {
    config: {
        name: `плакать`,
        aliases: [`плакать`, `cry`, `поплакать`, `плак`]
    },
    
  run: async (bot, message, args) => {
    message.delete();
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setAuthor(`SprayBot`)
    .setColor("RANDOM")
    .setTitle(`${message.author.username} плачет.`)
    .setTimestamp()
    
    message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
  }
};