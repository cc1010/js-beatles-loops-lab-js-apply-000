// add solution here
const musicians = ['John Lennon', 'Paul McCartney ', 'George Harrison', 'Ringo Starr']
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']



function theBeatlesPlay(musicians , instruments) {
  let newList = []
  
 for (let i = 0; i < musicians.length; i++) {
   newList.push(`${musicians[i]} plays ${instruments[i]}`)
 }
 return newList;
}


theBeatlesPlay(musicians, instruments)

<<<<<<< HEAD
//////////////////////

const facts = ['a', 'b', 'c', 'd']

function johnLennonFacts(facts){
  let i = 0
  let newFactsList = []
  
  while (i < facts.length){
    newFactsList.push(`${facts[i]}!!!`)  
    i++
  }
  return newFactsList
}

johnLennonFacts(facts)

///////////////////////

function iLoveTheBeatles (num){
  const newArray = []
  do {
    newArray.push(`I love the Beatles!`)
    
    num++
  } 
  while (num < 15)
  
  return newArray;
}
iLoveTheBeatles(num)
=======
function johnLennonFacts
>>>>>>> 867f26e31ab3793dc91f8a9712c4a588b5903b1a
