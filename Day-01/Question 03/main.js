//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var names = "Subra";
//to print the name in lowercase
console.log(names.toLowerCase());
//to print the name in uppercase
console.log(names.toUpperCase());
//to print the name in titlecase
console.log(names.charAt(0).toUpperCase() + names.slice(1).toLowerCase());
