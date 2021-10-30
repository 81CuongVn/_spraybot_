const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const { MessageEmbed } = require('discord.js');
const kitsu = new Kitsu();
var aq = require('animequote');
const fetch = require("node-fetch")

module.exports = {
    config: {
        name: `anime`,
        aliases: [`anime`, `аниме`]
    },
  run: async (bot, message, args) => {
      message.delete()
   if (!args[0]) {
     return message.channel.send("Пожалуйста, напишите название аниме").then(m => (m.delete({timeout: 10000})));
      
    }
    //main part
        var search = message.content.split(/\s+/g).slice(1).join(" ");
        kitsu.searchAnime(search).then(async result => {
            if (result.length === 0) {
                return message.channel.send(`Не удалось найти аниме с названием **${search}**!`).then(m => (m.delete({timeout: 10000})));
            }
          
          var anime = result[0]

          let embed = new MessageEmbed()
                .setColor('#FF2050')
                .setAuthor(`SprayBot | ${anime.titles.russian ? anime.titles.russian : search} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Информация', `•\u2000\**Название:** ${anime.titles.romaji}\n\•\u2000\**Возраст :** ${anime.ageRating}\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Есть' : 'Нету'}`, true)
                .addField('❯\u2000\Статистика', `•\u2000\**Рейтинг:** ${anime.averageRating}\n\•\u2000\**Место в рейтинге:** ${anime.ratingRank}\n\•\u2000\**Место по популярности:** ${anime.popularityRank}`, true)
                .addField('❯\u2000\Статус', `•\u2000\**Эпизодов:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Дата выхода:** ${anime.startDate}\n\•\u2000\**Закончился:** ${anime.endDate ? anime.endDate : "Выходит"}`, true)
            
                .setThumbnail(anime.posterImage.original, 100, 200);
          

            return message.channel.send({ embed }).then(m => (m.delete({timeout: 10000})));
        }).catch(err => {
            console.log(err)
            return message.channel.send(`Ошибка!!`).then(m => (m.delete({timeout: 10000})));

        });
    }

}