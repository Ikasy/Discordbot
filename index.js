const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { deploy } = require('./deploy-commands.js');
const { Game } = require('./game');
//henter bottens token
const { token, guildId, clientId } = require('./config.json');
deploy(clientId, guildId, token)
//fortæller botten, hvad den skal hente
const client = new Client({ intents: 
    [Intents.FLAGS.GUILDS],
});

let gamedata = new Game()
//samler kommandoer og kigger i directory efter filer som slutter på .js
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// så længe der er en fil, lav en fil til den
for (const file of commandFiles) {
    //hent filen
	const command = require(`./commands/${file}`);
    //hent det i filen, navn, data og kommando
	client.commands.set(command.data.name, command);
}
// viser botten er klar
client.once('ready', () => {
	console.log('Ready!');
});

// når en interaktion (fordi det gælder / kommandoer) bliver lavet og forsøger at køre den efter den har fået navnet
// og hvis ikke sender en forkert besked
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return	;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, gamedata);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true/*betyder at den ikke vare længe*/  });
	}
});
// lader botten logge ind
client.login(token);