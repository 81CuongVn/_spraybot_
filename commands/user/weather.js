const weather = require('weather-js');
const discord = require('discord.js')

module.exports = {
    config: {
        name: `weather`,
        aliases: [`weather`, `погода`]
    },
  run: (client, message, args) => {
    message.delete();
    
    
    if(!args.length) {
      return message.channel.send("Пожалуйста, укажите город.")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Погода ${result[0].location.name}`)
.setColor("#ff2050")
.setAuthor(`SprayBot`)
.setDescription("Температуры могут немного отличаться")
.addField("Температура", `${result[0].current.temperature}°`, true)
.addField("Погода", result[0].current.skytext, true)
.addField("Влажность", result[0].current.humidity, true)
.addField("Скорость ветра", result[0].current.windspeed, true)
.addField("Время", result[0].current.observationtime, true)
.addField("Направление ветра", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
} catch(err) {
  return message.channel.send("Город не был найден!").then(m => (m.delete({timeout: 10000})));
}
});   
    
  }
}