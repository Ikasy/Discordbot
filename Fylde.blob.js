let picked = roomlist.celler[Math.floor(Math.random() * 14)]
console.log(picked)

function makeCode (){
    let firstN = random(celler);
    let secondN = random(celler);
    let thirdN = random(celler);
    let fourthN = random(celler);
}



client.on("messageCreate",(message) => {
    
    if (message.content == "p.start"){
        room = "Celle5";
        message.reply("")
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