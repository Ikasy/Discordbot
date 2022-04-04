const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Led efter ting i rummet'),
	async execute(interaction) {
		await interaction.reply('Du fandt ikke noget, prøv et andet!');
	},
};