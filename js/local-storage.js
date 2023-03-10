// localStorage.setItem(key, value);
// only string is stored, array other type converted to string
localStorage.setItem("drinks", "water");
localStorage.getItem("drinks");
localStorage.removeItem("drinks");
localStorage.clear();

// to store Object use JSON.stringify()
const person = { name: "Lal Mia", age: 13, profession: "painter" };
person.toString(); // output: '[object Object]'
const personString = JSON.stringify(person);
personString.name; // undefined

// to covert the Object string use JSON.parse()
const personConverted = JSON.parse(personString);
personConverted.name; // works now
