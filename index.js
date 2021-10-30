const { Client, Collection } = require('discord.js');
const bot = new Client();
const fs = require("fs");
const { token } = require(`./botconfig.json`);
const { prefix } = require(`./botconfig.json`);
[`aliases`, `commands`].forEach(x => bot[x] = new Collection());
["command", "events"].forEach(x => require(`./handlers/${x}`)(bot));
bot.on("ready", () => {
    bot.user.setStatus("online");
    bot.user.setActivity("///help | by Aihari", { type: "PLAYING"})
    bot.on("message", async message => {
})
});
bot.login(token)
