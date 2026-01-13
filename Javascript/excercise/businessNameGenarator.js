
// Create a business name generator by combining the given adjectives,shop name and words

// Adjectives
//creazy,Amazing and fire

//Shop Name:
// food,Engine , garments

//Another Word
//Bros,Limited,Hub


let adjectives = 'Crazy Amazing Fire'
let shop = 'Food Engine Garments'
let another = 'Bros Limited Hub'


function rand(){
   
    
    let adjWords = adjectives.split(" ");
    let shopWords = shop.split(" ");
    let anoWords=another.split(" ");

let adjRand = Math.floor(Math.random()*adjWords.length)    
let shopRand = Math.floor(Math.random()*shopWords.length)    
let anoRand = Math.floor(Math.random()*anoWords.length)    

console.log(adjWords[adjRand],shopWords[shopRand],anoWords[anoRand])

}

rand()