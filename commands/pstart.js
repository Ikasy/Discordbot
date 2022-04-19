const { SlashCommandBuilder } = require('@discordjs/builders'); 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pstart')
		.setDescription('Starter spillet Prison Escape'),
	async execute(interaction, gamedata) {
		gamedata.currentRoom = "celle5"
		gamedata.ready();
		await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har nu startet fængsel eventyret. Du befinder dig i din celle og kan gå ud til frokost når du lyster. Forsæt med /opendoors for at se hvor du kan gå hen og /goto for at flytte lokale.`);
		console.table(gamedata.celler);
	},
};
