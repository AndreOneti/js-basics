console.log("Hello World!");

function sayHello(name) {
  console.log(`Hello ${name}.`);
}

sayHello("André Carvalho");

var nameList = [
  "André",
  "João",
  "Luiz",
  "Paulo",
  "Mauricio"
];


nameList.forEach(sayHello);
