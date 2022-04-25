const { SlashCommandBuilder } = require('@discordjs/builders'); 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pstart')
		.setDescription('Starter spillet Prison Escape'),
	async execute(interaction, gamedata) {
		gamedata.currentRoom = "celle5"
		gamedata.ready();
		await interaction.reply(`Lokation: ${gamedata.currentRoom}\n Endnu en dag bag tæmmer, men i dag skal være den sidste, du skal bryde ud, du har lagt planen for at komme ud herfra, men det kræver der bliver fundet de mange koder og objekter der skal til for at åbne dørene. Du er i stand til at bevæge dig mellem din fængselscelle, gang, kantine, træningsgården og udendørsarealet. Ved at bruge funktionen /goto kan man bevæge sig til nært læggende rum og ved at bruge /search kan man i disse rum lede efter objekter til at komme ud med. Til disse to kommandoer er der valgfrie variabler til koder eller til objekter du ønsker at bruge i rummet. Alt hvad du finder, ligger inde i dit inventar det kan tilgås ved at skrive /inventory. Hvis du ønsker at gå fra spillet før du har fundet, kan du skrive /done for at genstarte. `);
		console.table(gamedata.celler);
	},
};
