const discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
    config: {
        name: `asscii`,
        aliases: [`asscii`]
    },

    run: async (client, message, args) => {
        message.delete();

   let text = args.join(" ");
   if(!text) {
return message.channel.send(`Пожалуйста, введите текст!`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`Пожалуйста, введите текст, который содержит не больше 20 символов`)
}

figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AssciiArt' 
}).then(m => (m.delete({timeout: 10000})));
})

    }
};