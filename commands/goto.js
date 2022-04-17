const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');

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
			.addChoice('Celle 1', 'celle1')
			.addChoice('Celle 2', 'celle2')
			.addChoice('Celle 3', 'celle3')
			.addChoice('Celle 4', 'celle4')
			.addChoice('Celle 5', 'celle5')
			.addChoice('Celle 6', 'celle6')
			.addChoice('Celle 7', 'celle7')
			.addChoice('Celle 8', 'celle8')
			.addChoice('Celle 9', 'celle9')
			.addChoice('Celle 10', 'celle10')
			.addChoice('Celle 11', 'celle11')
			.addChoice('Celle 12', 'celle12')
			.addChoice('Celle 13', 'celle13')
			.addChoice('Celle 14', 'celle14')
			.addChoice('Kantine', 'kantine')
			.addChoice('Køkken', 'køkken')
			.addChoice('Træningshal', 'træningshal')
			.addChoice('Vagt', 'vagt')
			.addChoice('Udendørs', 'udendørs')
			.addChoice('Toilet', 'toilet')
			.addChoice('Bad', 'bad')
			.addChoice('Sygeplejerske', 'sygeplejerske')
			.addChoice('Opbevaring', 'opbevaring')
			.addChoice('Reception', 'reception')),
	async execute(interaction, gamedata) {
		let going = interaction.options.getString('rum')
		gamedata.doors();
		if (going === gamedata.currentRoom){
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du er allerede her`);
		}else if (!gamedata.available.includes(going)) {
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har ikke adgang til dette rum fra hvor du er, prøv et andet lokale`)
		} else {
			console.log(gamedata.currentRoom)
			gamedata.currentRoom = interaction.options.getString('rum')
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har nu flyttet dig`)
		}
		
	},
};
