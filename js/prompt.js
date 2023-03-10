// alert("How are you?");
const showAlert = () => {
  alert("Dosto, taka ase dhar dite parbi, just 500?");
};
const lendMoney = () => {
  const result = confirm("Will you lend me 500 taka?");
  console.log(result);
  if (result === true) {
    alert("Tui amar jan er dosto!!!");
  } else {
    console.log("DGM.... toke ajke e block maira dibo");
  }
};

const getInfo = () => {
  // alert
  // confirm
  const name = prompt("Tell me your name");
  console.log(name);
  if (name === null) {
    alert("Naam na dile kaam nai! Ja fooot");
  } else {
    console.log(name, "Welcome to this world!!");
  }
};
