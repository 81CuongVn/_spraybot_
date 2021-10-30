const { Random } = require("something-random-on-discord");
const random = require("something-random-on-discord").Random

module.exports = {
    config: {
        name: `кошко девочки`,
        aliases: [`neko`, `неко`]
    },
  run: async (client, message, args) => {
    message.delete();
    
    let data = await random.getNeko();
    message.channel.send(data).then(m => (m.delete({timeout: 30000})));
    
  }
}