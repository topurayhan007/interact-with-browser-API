const hello = localStorage.getItem("hello");
console.log(hello);

const setAge = () => {
  // window.localStorage.setItem("age", 30);  // this also works
  localStorage.setItem("age", 30);
};
