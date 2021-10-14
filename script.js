let response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((res) => res);
console.log(response);
