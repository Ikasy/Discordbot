const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('opendoors')
		.setDescription('Fortæller hvilke døre du kan gå til'),
	async execute(interaction, gamedata) {
		gamedata.doors()
		console.log(gamedata.available)
		await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Dine muligheder er: ${gamedata.available}`);
	},
}; 