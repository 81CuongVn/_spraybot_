const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `oir`,
        aliases: [`oir`, `оир`, `орел и решка`]
    },
    run: async (bot, message, args) => {
        message.delete();
        message.channel.send(`${message.author.username} бросил монету....`).then(m => (m.delete({timeout: 1000})));
            var random = Math.floor(Math.random() * 3) + 1; 
            
            if (random === 1) { 
                message.channel.send(`У ${message.author} :full_moon: орёл!`).then(m => (m.delete({timeout: 10000})));
            } else if (random === 2) { 
                message.channel.send(`У ${message.author} :new_moon: решка!`).then(m => (m.delete({timeout: 10000})));
            } else if (random === 3) { 
                message.channel.send(`У ${message.author} :last_quarter_moon: монета упала ребром!`).then(m => (m.delete({timeout: 10000})));

            }
        }
    };