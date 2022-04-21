class Game {
    constructor(){
        this.chosenCells = []
        this.currentRoom = "";
        //kode til køkken
        this.firstN = Math.floor(Math.random() * 9) + 1;
        this.secondN = Math.floor(Math.random() * 9) + 1;
        this.thirdN = Math.floor(Math.random() * 9) + 1;
        this.fourthN = Math.floor(Math.random() * 9) + 1;
        this.celler = [ 
            ['celle1'],
            ['celle2'],
            ['celle3'],
            ['celle4'],
            ['celle5'],
            ['celle6'],
            ['celle7'],
            ['celle8'],
        ];
        this.available = [];
        this.code = `${this.firstN}${this.secondN}${this.thirdN}${this.fourthN}`;
        console.log(this.code)
        this.inventory = new Set();
        this.kcheck = false;
        this.styrke = 0;
        this.sunlocked = false;
        this.scheck = false;
        this.opcheck = false; 
        this.tcheck = false; 
        this.vunlocked = false;
        this.vcheck = false; 
        
        // kode til opbevaring
        this.firstPN = Math.floor(Math.random() * 9) + 1;
        this.secondPN = Math.floor(Math.random() * 9) + 1;
        this.thirdPN = Math.floor(Math.random() * 9) + 1;
        this.opCode = `${this.firstPN}${this.secondPN}${this.thirdPN}`;
        console.log(this.opCode)

        // kode til ud af receptionen 
        this.firstRN = Math.floor(Math.random() * 9) + 1;
        this.secondRN = Math.floor(Math.random() * 9) + 1;
        this.thirdRN = Math.floor(Math.random() * 9) + 1;
        this.fourthRN = Math.floor(Math.random() * 9) + 1;
        this.rCode = `${this.firstRN}${this.secondRN}${this.thirdRN}${this.fourthRN}`;
        console.log(this.rCode)
        this.do = 0;

        // kode til receptionen
        this.firstredN = Math.floor(Math.random() * 9) + 1;
        this.secondblueN = Math.floor(Math.random() * 9) + 1;
        this.thirdgreenN = Math.floor(Math.random() * 9) + 1;
        this.cCode = `${this.firstredN}${this.secondblueN}${this.thirdgreenN}`;
        console.log(this.cCode)


        }

    pickN(mxNR) {
        let random = Math.floor(Math.random() * mxNR);

        if(!this.chosenCells.includes(random)) {
            this.chosenCells.push(random);
            return random;
        } else {
        if(this.chosenCells.length < mxNR) {
        //Recursively generate number
            return  this.pickN(mxNR);
        } else {
            console.log('No more numbers available.');
            return false;
        }}}

    ready(){
        this.pickN(8)
        this.pickN(8)
        this.pickN(8)
        this.pickN(8)
        this.celler[this.chosenCells[0]].push( this.firstN );
        this.celler[this.chosenCells[1]].push( this.secondN );
        this.celler[this.chosenCells[2]].push( this.thirdN );
        this.celler[this.chosenCells[3]].push( this.fourthN );
    }
    doors(){
        if (this.currentRoom == "celle1" || this.currentRoom == "celle2" || this.currentRoom == "celle3"|| this.currentRoom == "celle4" || this.currentRoom == "celle5"|| this.currentRoom == "celle6"|| this.currentRoom == "celle7" || this.currentRoom == "celle8" ) {
            this.available = ["gang"]
        }
        if (this.currentRoom == "gang"){
            this.available = ['celle1','celle2','celle3','celle4','celle5','celle6','celle7','celle8', 'kantine']
        }
        if (this.currentRoom == "kantine"){
            this.available = ["gang ","køkken"/*locked with key*/, "vagt"/*locked for now*/, "træningshal"]
        }
        if (this.currentRoom == "køkken"){
            this.available = ["kantine"]
        }
        if (this.currentRoom == "træningshal"){
            this.available = ["kantine","udendørs"]
        }
        if (this.currentRoom == "vagt"){
            this.available = ["gang","kantine","udendørs"]
        }
        if (this.currentRoom == "udendørs"){
            this.available = ["træningshal","vagt"/*locked for now */,"toilet","sygeplejerske"/*locked with needed item from kitchen*/]
        }
        if (this.currentRoom == "toilet"){
            this.available = ["udendørs","bad"]
        }
        if (this.currentRoom == "bad"){
            this.available = this.available["toilet"]
        }
        if (this.currentRoom == "sygeplejerske"){
            this.available = ["udendørs"/*if unlocked*/, "opbevaring"/*need key */, "reception"/*need code*/]
        }
        if (this.currentRoom == "opbevaring"){
            this.available = ["sygeplejerske"]
        }
        if (this.currentRoom == "reception"){
            this.available = ["sygeplejerske","ud"/*locked */]
        }
    }
    
}
module.exports = {Game};
    

    
