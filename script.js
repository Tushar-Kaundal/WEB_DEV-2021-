const btn = document.querySelector("button");
const inputs = document.querySelector("input");
const getData = async (item) => {
  const url = `https://api.edamam.com/search?q=${item}&app_id=110a4523&app_key=9fa4abb181983de111aa0fcb84bbc66b`;
  const data = await fetch(url).then((res) => res.json());
  console.log(data.hits);
};

btn.addEventListener("click", (ev) => {
  getData(inputs.value);
});
