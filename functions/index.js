//* Recomended use VsCode lib Better Comments
//? Types of functions declarations.

//* Normal function create.
function getCurrentDate() {
  let date = new Date();
  return date;
}

//* Arrow function in const type create.
const getDate = () => new Date();


console.log(getCurrentDate());
console.log(getDate());
