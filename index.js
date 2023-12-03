function calculate() {

  let userDate = document.getElementById('dob').value;

  let dateArray = userDate.split('-');
  let userYear = dateArray[0];


  let currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; 
  var day = currentDate.getDate();

  var exactDate = day + "-" + month + "-" + year;

  var AgeCalc = (year - userYear);
  var resultElement = document.querySelector('.result');
  resultElement.innerHTML = "Your are " + AgeCalc + " years Old !";


}
