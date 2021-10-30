const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("bd61eeb2dcb7abac82f4e485bf0ae9435c9a1ee5" , {

    notFoundAsError: true,
    completeScores: false 
})

module.exports = {
    config: {
        name: `osu`,
        aliases: [`osu`, `осу`]
    },
run: async (bot, message, args) => {
    message.delete();

let username = args[0]
  
  
if (!args[0]) return message.channel.send('Пожалуйста, введите ник игрока osu!')

api.getUser({u: username}).then(user => {
    let osu = new Discord.MessageEmbed()
.setTitle(`Информация о игроке ${user.name}`)
.setAuthor('SprayBot')
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.setColor("#D0436A")
.addField('Ник', user.name)
.addField('PP', Math.round(user.pp.raw))
.addField('Топ', user.pp.rank)
.addField('Уровень', Math.round(user.level))
.addField('Страна', user.country)
.addField('Топ в стране', user.pp.countryRank)
.addField('Количество игр', user.counts.plays)
.addField('Аккуратность', `${user.accuracyFormatted}`);
message.channel.send(osu).then(m => (m.delete({timeout: 10000})));

})
}
};