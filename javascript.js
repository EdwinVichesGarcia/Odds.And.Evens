let numBank = [];
let oddNumbers = [];
let evenNumbers = [];


const numForm = document.querySelector("numbersForm");
const numBankOutput = document.getElementById("numberBank").querySelector("output");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");
const odd = document.getElementById("odds").querySelector("output");
const even = document.getElementById("evens").querySelector("output");

input.addEventListener("change", (e) => {
    if((e.target.value != undefined) && (e.target.value != null) && (e.target.value!= ""))
      number = e.target.value;
}); 

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();   
  input.value = "";  
  if(numBank.length == 0){
    odd.value = "";
    even.value = "";
    numBankOutput.value = "";
  }
  if((number != undefined) && (number != null) && (number!= "")){      
    numberBank.push(number);
    number = "";
    numBankOutput.value = numBank; 
  }  
});

sortOneButton.addEventListener("click", (e) => {
    if(numBank.length != 0){
       if((numBank[0] % 2) == 0){
        evenNumbers.push(numBank[0]); 
        event.value = evenNumbers;
       }else{
        oddNumbers.push(numBank[0]);
        odd.value = oddNumbers;
       }
       numBank = numBank.slice(1);
       if(numBank.length == 0){
        evenNumbers.splice(0,evenNumbers.length);
        oddNumbers.splice(0,oddNumbers.length);
       }
       numBankOutput.value = numBank; 
    }
});

sortAllButton.addEventListener("click", (e) => {
    if(numBank.length != 0){
       numBank.forEach(element =>{
        if((element % 2) == 0){
            evenNumbers.push(element);            
           }else{
            oddNumbers.push(element);            
           }
       })
       odd.value = oddNumbers;
       even.value = evenNumbers;
       numbBank.splice(0,numBank.length);
       oddNumbers.splice(0,oddNumbers.length);
       evenNumbers.splice(0,evenNumbers.length);
       console.log(numBank);
       numBankOutput.value = ""; 
    }
});