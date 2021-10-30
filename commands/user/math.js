const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports = {
    config: {
        name: `math`,
        aliases: [`реши`, `math`]
    },
  run: async (client, message, args) => {
    message.delete();
    try {
      if (!args[0]) return message.channel.send("Пожалуйста, напиши пример, который надо решить");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Результат:`)
        .setAuthor(`SprayBot`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
    } catch (error) {
      message.channel.send(`Ошибка!!`).then(m => (m.delete({timeout: 10000})))
    }
  }
};