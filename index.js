// code your solution here
const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`;
}
//console.log(mondayWork("play football"));

function wrapAdjective(special) {
    return function(adjective) {
      return `You are ${special}${adjective}${special}!`;
    }
  }

//wrapAdjective();



// const numOfVowels = (string) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A','I','E','O','U'];
//     let count = 0;
//     for(let i = 0; i < string.length ;i++){
//         if (vowels.includes(string[i])){
//             count++;

//         }
//     }
//     return count;
// } 
// console.log(numOfVowels('hello'));
