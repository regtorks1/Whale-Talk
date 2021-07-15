let input = 'The Lion and Mouse';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
   //console.log(inputIndex)
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
     //console.log(vowelIndex)
   if(input[inputIndex] === 'e' || input[inputIndex] === 'u'){
     resultArray.push(input[inputIndex]);
     
   }
  }
 
}
console.log(resultArray.join('').toUpperCase());