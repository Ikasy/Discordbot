const { SlashCommandBuilder } = require('@discordjs/builders');
//const { roomlist } = require('../index.js'); NOT WORKING?? 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goto')
		.setDescription('Gå til andre rum!'),
        /*.addStringOption(option =>
            option.setName('Rum')
                .setDescription('Andre rum du kan flytte dig til')
                .setRequired(true)
                .addChoice('Gang')),   no workkkk also dependent on the room youre in*/
	async execute(interaction) {
		await interaction.reply(`Lokation: lokale\nDu har nu flyttet dig`);
	},
};