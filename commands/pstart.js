const { SlashCommandBuilder } = require('@discordjs/builders'); 
const Data =  require('../classes/game.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pstart')
		.setDescription('Starter spillet Prison Escape'),
	async execute(interaction, currentRoom, celler) {
		gamedata = new Game();
		gamedata.currentRoom = "celle4"
		gamedata.ready();
		await interaction.reply(`Lokation: ${currentRoom}\n game started`);
		console.table(celler);
	},
};
//Du har nu startet fængsel eventyret. Du befinder dig i din celle og kan gå ud til frokost når du lyster. Forsæt med p.opendoors for at se hvor du kan gå hen og p.goto for at flytte lokale.