class Game {
    constructor(){
        this.chosenCells = []
        this.currentRoom = "";
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
            ['celle9'],
            ['celle10'],
            ['celle11'],
            ['celle12'],
            ['celle13'],
            ['celle14'],
        ];
        this.available = [];
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
        this.pickN(14)
        this.pickN(14)
        this.pickN(14)
        this.pickN(14)
        this.celler[this.chosenCells[0]].push( this.firstN );
        this.celler[this.chosenCells[1]].push( this.secondN );
        this.celler[this.chosenCells[2]].push( this.thirdN );
        this.celler[this.chosenCells[3]].push( this.fourthN );
    }
    doors(){
        if (this.currentRoom == "celle4") {
            this.available;
        }
    }
}
module.exports = {Game};
    

    
