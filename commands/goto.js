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
			.addChoice('Reception', 'reception'))
		.addStringOption( new SlashCommandStringOption()
			.setName('kode')
            .setDescription('Skriv en kode til låste rum!')
            .setRequired(false))
		.addStringOption( new SlashCommandStringOption()
			.setName('use')
			.setDescription('Brug en genstand fra din inventory!')
			.setRequired(false)),
	async execute(interaction, gamedata) {
		let going = interaction.options.getString('rum')
		let password = interaction.options.getString('kode')
		let used = interaction.options.getString('use')
		gamedata.doors();
		
		//hvis samme rum
		if (going === gamedata.currentRoom){
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du er allerede her`);
		
		//hvis der er for langt hen til det ønskede lokale
		} else if (!gamedata.available.includes(going)) {
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har ikke adgang til dette rum fra hvor du er, prøv et andet lokale`)
		
		//hvis man skriver en kode til et rum som ikke er køkken
		} else if (going != 'køkken' && password != undefined && going != 'opbevaring' && going != 'sygeplejerske' && going != 'vagt' && going != 'reception'){
			gamedata.currentRoom = interaction.options.getString('rum')
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Dette rum skal ikke bruge en kode, derfor har du flyttet dig alligevel`)
		
		//hvis man vil til køkkenet og koden er rigtig
		} else if (going == 'køkken' && password == gamedata.code) {	
			gamedata.currentRoom = interaction.options.getString('rum')
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har skrevet den rigtige kode og er gået ind i køkkenet`)

		//hvis man prøver at gå til køkkenet men koden ikke er blevet skrevet
		} else if (going == 'køkken' && password == undefined) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du skal bruge en kode til køkkenet, prøv at lede efter en kode med /search`)

		//hvis man skriver forkert kode
		} else if (going == 'køkken' && password != gamedata.code) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har skrevet den forkerte kode prøv igen`)

		//hvis man prøver at bruge en ting et andet sted en ved sygeplejersken
		}  else if (going != 'sygeplejerske' && used != undefined && going != 'vagt' && going != 'køkken' && going != 'opbevaring' && going != 'reception'){
			gamedata.currentRoom = interaction.options.getString('rum')
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Dette rum skal ikke bruge en genstand for at åbne, derfor har du flyttet dig alligevel`)

		// hvis ikke der er angivet en genstand
		} else if (going == 'sygeplejerske' && used == undefined && gamedata.sunlocked == false) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Dette rum skal bruge en genstand for at åbne, prøv at led efter ting du kan bruge eller kig i din inventory`)

		} else if (going === 'sygeplejerske' && used === undefined && gamedata.sunlocked === true){
			gamedata.currentRoom = interaction.options.getString('rum')	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har allerede låst op for dette rum, og har nu flyttet dig.`)

		//hvis man bruger et forkert item ved sygeplejersken 
		} else if (going === 'sygeplejerske' && used !== 'stegenål' && gamedata.inventory.has(used) && gamedata.sunlocked == false){
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du kan ikke finde et brug til denne genstand her`)
		
			// hvis man bruger den rigtige ting ved sygeplejerske
		} else if (going === 'sygeplejerske' && used === 'stegenål' && gamedata.inventory.has(used) && gamedata.sunlocked === false) {
			gamedata.inventory.delete(used)
			gamedata.currentRoom = interaction.options.getString('rum')	
			gamedata.sunlocked = true
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har brugt den rigtige ting, og er nu kommet ind`)
			
		} else if (going == 'sygeplejerske' && !gamedata.inventory.has(used) && used != undefined || going == 'vagt' && !gamedata.inventory.has(used) && used != undefined ) {
				await interaction.reply(`Du har ikke din ønskede genstand. Tjek din inventory med /inventory for at se hvad du har tilrådighed`);

			//hvis man vil til opbevaring og koden er rigtig
		} else if (going == 'opbevaring' && password == gamedata.opCode) {	
			gamedata.currentRoom = interaction.options.getString('rum')
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har skrevet den rigtige kode og er gået ind i opbevaring`)

			//hvis man prøver at gå til opbevaring men koden ikke er blevet skrevet
		} else if (going == 'opbevaring' && password == undefined) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du skal bruge en kode til opbevaring, prøv at lede efter en kode med /search i andre lokaler`)

			//hvis man skriver forkert kode
		} else if (going == 'opbevaring' && password != gamedata.opCode) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har skrevet den forkerte kode prøv igen`)

		} else if (going == 'vagt' && used == undefined && gamedata.vunlocked == false) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Dette rum skal bruge en genstand for at åbne, prøv at led efter ting du kan bruge eller kig i din inventory`)

		} else if (going == 'vagt' && used == undefined && gamedata.vunlocked == true){
			gamedata.currentRoom = interaction.options.getString('rum')	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har allerede låst op for dette rum, og har nu flyttet dig.`)

		//hvis man bruger et forkert item ved vagt 
		} else if (going == 'vagt' && used != 'nøglebundt' && gamedata.inventory.has(used) && gamedata.vunlocked == false){
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du kan ikke finde et brug til denne genstand her`)
		
			// hvis man bruger den rigtige ting ved vagt
		} else if (going == 'vagt' && used == 'nøglebundt' && gamedata.inventory.has(used) && gamedata.vunlocked == false) {
			gamedata.inventory.delete(used)
			gamedata.currentRoom = interaction.options.getString('rum')	
			gamedata.vunlocked = true
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har brugt den rigtige ting, og er nu kommet ind`)

		} else if (going == 'reception' && password == gamedata.cCode) {	
			gamedata.currentRoom = interaction.options.getString('rum')
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har skrevet den rigtige kode og er gået ind i receptionen`)

			//hvis man prøver at gå til opbevaring men koden ikke er blevet skrevet
		} else if (going == 'reception' && password == undefined) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du skal bruge en kode til receptionen, på låsen kan du i denne rækkefælge se farverne rød, blå, grøn, prøv at lede efter en kode med /search i andre lokaler`)

			//hvis man skriver forkert kode
		} else if (going == 'reception' && password != gamedata.cCode) {	
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har skrevet den forkerte kode prøv igen. Husk farven på låsen var rød, blå, grøn.`)

		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		else {
			gamedata.currentRoom = interaction.options.getString('rum')
			await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Du har nu flyttet dig`)

		}
		
	
	},
};
