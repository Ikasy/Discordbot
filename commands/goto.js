const { SlashCommandBuilder, SlashCommandIntegerOption, SlashCommandStringOption } = require('@discordjs/builders');
const { Application, ApplicationCommand } = require('discord.js');

//går sådan man kan hente informatoionerne i en anden fil
module.exports = {
	data: new SlashCommandBuilder()
		.setName('goto')
		.setDescription('gå til andre rum!')
		.addStringOption( new SlashCommandStringOption()
			.setName('rum')
            .setDescription('Åbne rum du kan gå til')
            .setRequired(true)
			.addChoice('Gang', 'gang')
			.addChoice('Anden', 'ganfaf')),
	async execute(interaction, gamedata) {
		gamedata.currentRoom = choice
		await interaction.reply(`Lokation: ${gamedata.currentRoom}\nDu har nu flyttet dig`);
	},
};
