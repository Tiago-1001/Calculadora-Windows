var numbers = document.getElementById('result').innerHTML;

function insert(value) {
  numbers = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = `${numbers}${value}`;
};

function clearResult() {
  document.getElementById('result').innerHTML = '';
}

function clearLastNumber() {
  document.getElementById('result').innerHTML = numbers.slice(0, -1);
}

function result() {
  const numbers = document.getElementById('result').innerHTML;

  if (numbers !== '') {
    document.getElementById('result').innerHTML = eval(numbers)
  
  } else {
    alert('Insira algum número');
  }
}

function source() {
 const numbers = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = eval(numbers * numbers);
}