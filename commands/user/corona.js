const axios = require('axios');
const { MessageEmbed, MessageManager, Message } = require('discord.js');

module.exports = {
    config: {
        name: `corona`,
        aliases: [`corona`, `корона`]
    },
	run: async (client, message, args) => {
		const baseUrl = 'https://corona.lmao.ninja/v2';
		message.delete();

		let url; let response; let
			corona;

		try {
			url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
			response = await axios.get(url);
			corona = response.data;
		} catch (error) {
			return message.channel.send(`Произошла ошибка!`);
		}

		const embed = new MessageEmbed()
			.setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Статистика коронавируса во всем мире')
			.setColor('#fb644c')
			.setAuthor(`SprayBot`)
			.setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
			.addFields(
				{
					name: 'Всего случаев:',
					value: corona.cases.toLocaleString(),
					inline: true,
				},
				{
					name: 'Всего смертей:',
					value: corona.deaths.toLocaleString(),
					inline: true,
				},
				{
					name: 'Всего выздоровших:',
					value: corona.recovered.toLocaleString(),
					inline: true,
				},
				{
					name: 'Заболевших за сегодня:',
					value: corona.active.toLocaleString(),
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Выздоровших за сегодня:',
					value: corona.todayRecovered.toLocaleString().replace('-', ''),
					inline: true,
				},
				{
					name: 'Смертей за сегодня:',
					value: corona.todayDeaths.toLocaleString(),
					inline: true,
				},
			);

		return message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
	},
};