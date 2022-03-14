const Discord = require("discord.js");

const TOKEN ="OTQ2MzUzMTk4OTkyNTg4ODgw.YhdeGQ.-suHMAWe0gVFLwjS8grLooU64fU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready",() => {
console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate",(message) => {
    
    if (message.content != "Hej"){
        message.reply("Hej")
    }
    })

client.login(TOKEN)