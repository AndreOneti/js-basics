
var date = new Date();
var number = 123456.789;

var language = 'pt-BR';

let dateOptions = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Sao_Paulo'
};

let numberOptions = {
  style: 'currency',
  currency: 'BRL'
};

var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Sao_Paulo'
};

console.log(new Intl.DateTimeFormat(language, dateOptions).format(date));
console.log(new Intl.NumberFormat(language, numberOptions).format(number));
console.log(new Intl.DateTimeFormat(language, options).format(date));
