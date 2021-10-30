const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (bot) => {
    console.log(`${bot.user.tag} начал свою работу.`)
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    })
}