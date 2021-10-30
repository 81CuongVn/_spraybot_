const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `licen`,
        aliases: [`licen`, `ликен`]
    },
    run: async (bot, message, args) => {
        message.delete()
        message.channel.send('Самый лучший gachiсервер по майнкрафту: https://discord.gg/tXeVKnaMRV').then(m => (m.delete({timeout: 10000})));
    }
};