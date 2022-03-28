const Discord = require("discord.js");

const TOKEN ="OTQ2MzUzMTk4OTkyNTg4ODgw.YhdeGQ.-suHMAWe0gVFLwjS8grLooU64fU";
let roomlist = {
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
    

}

let picked = roomlist.celler[Math.floor(Math.random() * 14)]
console.log(picked)

function makeCode (){
    let firstN = random(celler);
    let secondN = random(celler);
    let thirdN = random(celler);
    let fourthN = random(celler);
}
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
    
    if (message.content == "p.start"){
        room = "Celle5";
        message.reply("Du har nu startet fængsel eventyret. Du befinder dig i din celle og kan gå ud til frokost når du lyster. Forsæt med p.opendoors for at se hvor du kan gå hen og p.goto for at flytte lokale.")
        // billede af fængsel?
    }
    if (message.content == "p.search" && room == "Celle5"){
        message.reply("Du er i din egen celle. Du finder en kold seng med lagner og et skrive bord")
    }
    if (message.content == "p.opendoors" && room == "Celle5"){
        message.reply("Dine mulige rum at gå til er: Cellegang")
    }
    if (message.content == "p.opendoors" && room == "Cellegang"){
        message.reply("Dine mulige rum at gå til er: Cellerne fra 1-14. Skriv Celle#. Der er to løste døre til Vagtstuen og til Receptionen. Den sidste leder ud til kantinen")
    }
    if (message.content == "p.goto Cellegang" && room == "Celle5"){
        room = "Cellegang";
        message.reply("Du er gået ud i gangen nu. Du kan se 14 celler med din egen. Alle dørene ser ud til at være åben, da resten af fangerne er i kantinen. ")
    }
    
    })

client.login(TOKEN)