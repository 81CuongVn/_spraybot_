const { MessageEmbed } = require('discord.js');

const moment = require('moment');



const regions = {

	brazil: 'Бразилия',

	europe: 'Европа',

	hongkong: 'Гонконг',

	india: 'Индия',

	japan: 'Япония',

	russia: 'Россия',

	singapore: 'Сингапур',

	southafrica: 'Южная Африка',

	sydeny: 'Сидений',

	'us-central': 'Америка',

	'us-east': 'Восточная Америка',

	'us-west': 'Западная Америка',

	'us-south': 'Южная Америка'

};

module.exports = {
    config: {
        name: `server`,
        aliases: [`server`, `сервер`]
    },
run: (client, message, args) => {
    message.delete();

		const members = message.guild.members.cache;

		let embed = new MessageEmbed()

			.setDescription(`**Информация о сервере __${message.guild.name}__**`)

			.setColor('RANDOM')

			.setThumbnail(message.guild.iconURL({ dynamic: true }))

			.addField('Информация:', [

				`**❯ ID:** ${message.guild.id}`,

				`**❯ Участников:** ${message.guild.memberCount}`,

				`**❯ Регион:** ${regions[message.guild.region]}`,

				`**❯ Буст:** ${message.guild.premiumTier ? `${message.guild.premiumTier}` : 'Нет'}`,

				`**❯ Дата создания сервера:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,

				'\u200b'
			])
			.setAuthor(`SprayBot`)

			.setTimestamp();

		message.channel.send(embed).then(m => (m.delete({timeout: 10000})));

	}

};
