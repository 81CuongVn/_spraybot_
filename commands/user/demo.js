const { MessageEmbed, MessageAttachment } = require('discord.js');
const demotivator = require('E:\\spraybot_js2\\modules\\demotivator.js')
var fs = require('fs');

module.exports = {
    config: {
        name: `demo`,
        aliases: [`demo`, `демо`, `демотиватор`]
    },
    async run (client, message, args) {
        message.delete()
        const data = args.join(' ').split('/')
        if (!data[0] || !data[1]) {
          return message.channel.send('Пожалуйста, пишите по примеру "///demo Tittle/Text"')
        }
        const attachment = new MessageAttachment(message.attachments.first().attachment) || null
        if (!attachment) {
          return message.channel.send('Ты не прикрепил(-а) фотографию.')
        }
        const image = await demotivator(attachment, data[0], data[1])
        message.channel.send({
          files: [image]
        })
    }
}