var ul = document.querySelector("ul");
let response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element) => {
      var child = document.createElement("li");
      var text = document.createTextNode(element.name);
      child.appendChild(text);
      ul.appendChild(child);
    });
  });
