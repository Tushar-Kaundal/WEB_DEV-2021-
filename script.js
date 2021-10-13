let response = fetch("https://jsonplaceholder.typicode.com/users").then(
  (data) => {
    console.log(data.json());
  }
);
