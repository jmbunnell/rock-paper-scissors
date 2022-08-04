//console.log('Hello World!');

//get computer to make random choice 
function getCompChoice(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    // return choice from array
    return item;
}
//create array of Rock, Paper or scissors
const choices = ['Rock', 'Paper', 'Scissors'];
//get result of random computer selection
const result = getCompChoice(choices);
//prints result 
console.log(result);



