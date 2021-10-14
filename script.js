var table = document.querySelector("table");
let response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((value) => {
      var element = document.createElement("tr");
      var child = `
      <td>${value.id}</td>
      <td>${value.name}</td>
      <td>${value.email}</td>
      <td>${value.username}</td>
      `;
      element.innerHTML = child;
      table.appendChild(element);
    });
  });
