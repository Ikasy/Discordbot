const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Led efter ting i rummet'),
	async execute(interaction, gamedata) {
			if (gamedata.celler[gamedata.chosenCells[0]][0] == gamedata.currentRoom ){
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[0]][1]} `);

			} else if (gamedata.celler[gamedata.chosenCells[1]][0] == gamedata.currentRoom) {
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[1]][1]} `);

			} else if (gamedata.celler[gamedata.chosenCells[2]][0] == gamedata.currentRoom ) {
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[2]][1]} `);

			} else if (gamedata.celler[gamedata.chosenCells[3]][0] == gamedata.currentRoom) {
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[3]][1]} `);

			}else if (gamedata.currentRoom == 'køkken' && gamedata.kcheck == false) {
				gamedata.inventory.push("Stegenål")
				gamedata.inventory.push("Æble")
				gamedata.inventory.push("Saks")
				gamedata.inventory.push("Banan")
				gamedata.inventory.push("Bolle")
				gamedata.inventory.push("Kniv")
				await interaction.reply(`Du har fundet nogle ting som du kan bruge ${gamedata.inventory}`);
				gamedata.kcheck = true;
			} else if (gamedata.currentRoom == 'køkken' && gamedata.kcheck == true) {
				await interaction.reply(`Du har allerede kigget i køkkenet. Der er ikke mere`);
			} else {
				await interaction.reply('Du fandt ikke noget, prøv et andet!');
			}
				
	},
};