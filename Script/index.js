function calculate() {

  let userinputDate = document.getElementById('dob').value;

  let dateArray = userinputDate.split('-');
  let userYear = dateArray[0];
  let userMonth = dateArray[1];
  let userDate = dateArray[2];


  let currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; 
  var day = currentDate.getDate();

  var exactDate = day + "-" + month + "-" + year;

  var resultYear = (year - userYear);
  var resultMonth = (12 - userMonth);
  
  var resultElement = document.querySelector('.result');
  resultElement.innerHTML = "Your are " + resultYear + " year & " + resultMonth + " months Old!";


}


