const resultElement = document.getElementById("result");
const textField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

checkButton.addEventListener("click", () => {
  let check = textField.value.replace(/[_\W]/g, "").toLowerCase();
  let bool = true;
  let check2 = check.split("").reverse().join("");
  console.log(check);
    if(check === ""){
      alert("Please input a value");
    }else {

      for(let i = 0; i < check.length; ++i) {
        if(check.charAt(i) !== check2.charAt(i)){
          bool = false;
          
      }
      
    }
    if(bool) {
        result.innerText = `${textField.value} is a palindrome`;
        console.log("yo");
      } else {
        result.innerText = `${textField.value} is not a palindrome`;
        console.log("ge");
      }
    }
});