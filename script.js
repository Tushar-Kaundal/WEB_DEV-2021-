let response = fetch("https://jsonplaceholder.typicode.com/users");
console.log(response);

setTimeout(() => {
  console.log(response);
  const data = response.json();
  console.log(data);
});
