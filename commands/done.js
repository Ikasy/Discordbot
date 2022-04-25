const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('done')
		.setDescription('Genstarter spillet, hvis nødtvendig'),
	async execute(interaction, gamedata) {
		await interaction.reply(`Du har nu givet op på dit spil, du kan starte forfra med /pstart`);
		gamedata = new Game();
	},
};