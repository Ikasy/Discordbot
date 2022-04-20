const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Led efter ting i rummet')
		.addStringOption( new SlashCommandStringOption()
			.setName('use')
			.setDescription('Brug en genstand fra din inventory!')
			.setRequired(false)),
	async execute(interaction, gamedata) {
			let used = interaction.options.getString('use')

			if (gamedata.celler[gamedata.chosenCells[0]][0] == gamedata.currentRoom ){
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[0]][1]} `);

			} else if (gamedata.celler[gamedata.chosenCells[1]][0] == gamedata.currentRoom) {
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[1]][1]} `);

			} else if (gamedata.celler[gamedata.chosenCells[2]][0] == gamedata.currentRoom ) {
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[2]][1]} `);

			} else if (gamedata.celler[gamedata.chosenCells[3]][0] == gamedata.currentRoom) {
				await interaction.reply(`Du fandt noget i væggen ${gamedata.celler[gamedata.chosenCells[3]][1]} `);

			} else if (gamedata.currentRoom == 'køkken' && gamedata.kcheck == false) {
				gamedata.inventory.add("stegenål")
				gamedata.inventory.add("æble")
				gamedata.inventory.add("saks")
				gamedata.inventory.add("banan")
				gamedata.inventory.add("bolle")
				gamedata.inventory.add("kniv")
				console.log(gamedata.inventory)
				await interaction.reply(`Du har fundet nogle ting som du kan bruge ${gamedata.inventory.value}`);
				gamedata.kcheck = true;
			} else if (gamedata.currentRoom == 'køkken' && gamedata.kcheck == true) {
				await interaction.reply(`Du har allerede kigget i køkkenet. Der er ikke mere`);

			} else if (gamedata.currentRoom == 'træningshal' && used == undefined) {
				await interaction.reply(`Du har fundet træningsudstyr, men du er for sulten til at bruge det`);

			} else if (gamedata.currentRoom == 'træningshal' && !gamedata.inventory.has(used) ) {
				await interaction.reply(`Du har fundet træningsudstyr, du har ikke den ønskede genstand i din inventory. Brug /inventory for at se hvad du kan bruge`);

			} else if (gamedata.currentRoom == 'træningshal' && gamedata.inventory.has(used)  && used == 'æble') {
				gamedata.styrke++
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Du har spist dit æble og trænet. \n Styrkeniveau: ${gamedata.styrke}`);

			} else if (gamedata.currentRoom == 'træningshal' && gamedata.inventory.has(used)  && used == 'banan') {
				gamedata.styrke++
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Du har spist dit banan og trænet. \n Styrkeniveau: ${gamedata.styrke}`);

			} else if (gamedata.currentRoom == 'træningshal' && gamedata.inventory.has(used)  && used == 'bolle') {
				gamedata.styrke++
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Du har spist dit bolle og trænet. \n Styrkeniveau: ${gamedata.styrke}`);

			} else if (gamedata.currentRoom == 'træningshal' && gamedata.inventory.has(used)  && used != 'bolle' || gamedata.currentRoom == 'træningshal' && gamedata.inventory.has(used)  && used != 'banan'||gamedata.currentRoom == 'træningshal' && gamedata.inventory.has(used)  && used != 'æble') {
				console.log(gamedata.inventory)
				await interaction.reply(`Denne genstand kan ikke bruges her`);

			} else if (gamedata.currentRoom == 'sygeplejerske' && gamedata.scheck == false) {
				gamedata.inventory.add("bandage")
				gamedata.inventory.add("gummihandsker")
				await interaction.reply(`Du har fundet nogle ting som du kan bruge ${gamedata.inventory}`);
				gamedata.kcheck = true;
			} else if (gamedata.currentRoom == 'sygeplejerske' && gamedata.scheck == true) {
				await interaction.reply(`Du har allerede kigget i køkkenet. Der er ikke mere`);

			} else if (gamedata.currentRoom == 'kantine' && used == undefined) {
				await interaction.reply(`Du kan se en anden fange der sidder med nogle ting prøv og se om du kan bytte med ham`);

			} else if (gamedata.currentRoom == 'kantine' && gamedata.inventory.has(used)  && used == 'bandage') {
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Den anden fange tager imod din bandage og giver i bytte et papir som han siger en vagt har tabt. Der er et tal på; ${gamedata.firstPN}`);

			} else if (gamedata.currentRoom == 'kantine' && gamedata.inventory.has(used)  && used == 'kniv') {
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Den anden fange tager imod din kniv og giver i bytte et papir som han siger en vagt har tabt. Der er et tal på; ${gamedata.secondPN}`);

			} else if (gamedata.currentRoom == 'kantine' && gamedata.inventory.has(used)  && used == 'saks') {
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Den anden fange tager imod din saks og giver i bytte et papir som han siger en vagt har tabt. Der er et tal på; ${gamedata.thirdPN}`);

			} else if (gamedata.currentRoom == 'kantine' && gamedata.inventory.has(used)  && used != 'bandage' || gamedata.currentRoom == 'kantine' && gamedata.inventory.has(used)  && used != 'kniv'||gamedata.currentRoom == 'kantine' && gamedata.inventory.has(used)  && used != 'saks') {
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Denne genstand kan ikke bruges her`);

			}  else if (gamedata.currentRoom == 'opbevaring' && gamedata.opcheck == false && used == undefined) {
				gamedata.inventory.add("skovl")
				await interaction.reply(`Du har fundet nogle ting som du kan bruge ${gamedata.inventory} \n Der står også en bankboks bagerst i lokalet men den ligner en der skal bruges en nøgle for at åbne den`);
				gamedata.opcheck = true;

			} else if (gamedata.currentRoom == 'opbevaring' && gamedata.opcheck == true && used == undefined) {
				await interaction.reply(`Der er ikke mere med værdi herinde, kun bankboksen`);

			// Når bankboksen er åbnet korrekt	
			}  else if (gamedata.currentRoom == 'opbevaring' && used == 'nøgle' && gamedata.inventory.has(used)) {	
				gamedata.inventory.delete(used)
				await interaction.reply(`Nøglen passer i bankboksen. Inden i ser du et parpir med koden ${gamedata.rCode}`) // kode til receptions puzzle
	
			} else if (gamedata.currentRoom == 'toilet' && gamedata.tcheck == false) {
				gamedata.inventory.add("nøglebundt")
				await interaction.reply(`Du har fundet nogle ting som du kan bruge ${gamedata.inventory}`);
				gamedata.tcheck = true;
			} else if (gamedata.currentRoom == 'toilet' && gamedata.tcheck == true) {
				await interaction.reply(`Du har allerede kigget på toilettet. Der er ikke mere`);

			} else if (gamedata.currentRoom == 'vagt' && gamedata.vcheck == false) {
				gamedata.inventory.add("nøgle")
				gamedata.inventory.add("lommelygte")
				console.log(gamedata.inventory)
				gamedata.vcheck = true;
				await interaction.reply(`Du har fundet nogle ting som du kan bruge ${gamedata.inventory.value}`);
				
			} else if (gamedata.currentRoom == 'vagt' && gamedata.vcheck == true) {
				await interaction.reply(`Du har allerede kigget i vagtstuen. Der er ikke mere`);








			} else if (gamedata.currentRoom == 'udendørs' && used == undefined) {
				await interaction.reply(`Du kan se der er et privat hjørne hvor der ikke er langt herind og frihed, mon man kunne finde noget der ville kunne få en ud?`);

			} else if ( gamedata.currentRoom == 'udendørs' && !gamedata.inventory.has(used) && used != undefined) {
				await interaction.reply(`Du har ikke den ønskede genstand i din inventory. Brug /inventory for at se hvad du kan bruge`);

			} else if (gamedata.currentRoom == 'udendørs' && gamedata.inventory.has(used)  && used == 'gummihandsker') {
				gamedata.do++
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Du har taget dine gummihandsker på så du kan grave et hul.`);

			} else if (gamedata.currentRoom == 'udendørs' && gamedata.inventory.has(used)  && used == 'lommelygte') {
				gamedata.do++
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Du har tændt for lommelygten så du kan se mens du graver`);

			} else if (gamedata.currentRoom == 'udendørs' && gamedata.inventory.has(used)  && used == 'skovl') {
				gamedata.do++
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Du er nu begyndt og grave`);

			} else if (gamedata.currentRoom == 'udendørs' && gamedata.inventory.has(used)  && used != 'gummihandsker' || gamedata.currentRoom == 'udendørs' && gamedata.inventory.has(used)  && used != 'lommelygte'||gamedata.currentRoom == 'udendørs' && gamedata.inventory.has(used)  && used != 'skovl') {
				gamedata.inventory.delete(used)
				console.log(gamedata.inventory)
				await interaction.reply(`Denne genstand kan ikke bruges her`);

			} else {
				await interaction.reply('Du fandt ikke noget, prøv et andet sted!');
			}
		
	},
};