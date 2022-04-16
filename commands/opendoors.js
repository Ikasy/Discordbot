const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('opendoors')
		.setDescription('Fortæller hvilke døre du kan gå til'),
	async execute(interaction, gamedata) {
		await interaction.reply('ja!');
	},
};