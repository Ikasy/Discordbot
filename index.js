const roomlist = {
    "celler": {
        "celle1": 0,
        "celle2": 0,
        "celle3": 0,
        "celle4": 0,
        "celle5": 0,
        "celle6": 0,
        "celle7": 0,
        "celle8": 0,
        "celle9": 0,
        "celle10": 0,
        "celle11": 0,
        "celle12": 0,
        "celle13": 0,
        "celle14": 0,
    },
    

};
module.exports = {roomlist};
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const token = process.env.TOKEN;
// hej
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);