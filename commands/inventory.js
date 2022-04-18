const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('fortæller hvad der er i din inventory!'),
	async execute(interaction, gamedata) {
		await interaction.reply(`Dette er hvad der er i din inventory: ${gamedata.inventory}.`);
	},
};