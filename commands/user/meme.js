const { MessageEmbed } = require('discord.js');
const randomPuppy = require("random-puppy");
const discord = require("discord.js");

module.exports = {
    config: {
        name: `meme`,
        aliases: [`meme`, `мем`, `мемы`]
    },
    run: async (bot, message, args) => {
        message.delete()
        const subReddits = ["meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        let embed = new MessageEmbed()
            .setTitle(`Из /r/${random}`)
            .setColor(`RANDOM`)
         .setAuthor(`SprayBot`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`);
            message.channel.send(embed).then(m => (m.delete({timeout: 25000})));
            }
        }