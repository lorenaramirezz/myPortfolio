var numGuests, numTables;

function letsPlan(){
    numGuests = prompt("How many guests do you have?");
    numTables = prompt("How many tables do you have?");
    calculate();
}

function calculate(){
    guestsPerTable = Math.floor(numGuests/numTables);
    guestsLeftover = numGuests % guestsPerTable;

    if(guestsLeftover == 0){
        alert("Your " + numGuests + " will be seated as follows: " + numTables + " tables of " + guestsPerTable);
    }
    else{
        alert("Your " + numGuests + " guests will be seated as follows: " +  (numTables-1) + " tables of " + (guestsPerTable + (guestsLeftover/(numTables-1))+ " and " + 1 + " table of " + guestsPerTable + "."));
    }

}
