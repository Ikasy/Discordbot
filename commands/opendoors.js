const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('opendoors')
		.setDescription('Fortæller hvilke døre du kan gå til'),
	async execute(interaction, currentRoom) {
		await interaction.reply('ja!');
	},
};