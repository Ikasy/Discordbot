const { SlashCommandBuilder } = require('@discordjs/builders');
//const { roomlist } = require('../index.js'); NOT WORKING?? 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pstart')
		.setDescription('Starter spillet Prison Escape'),
	async execute(interaction) {
		await interaction.reply(`Lokation: ${roomlist.celler.celle5}\nDu har nu startet fængsel eventyret. Du befinder dig i din celle og kan gå ud til frokost når du lyster. Forsæt med p.opendoors for at se hvor du kan gå hen og p.goto for at flytte lokale.`);
	},
};