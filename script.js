var Switch = document.querySelector("#toggle");
var body = document.querySelector("body");
var add = document.querySelector(".fa-plus");
var cross = document.querySelector(".cross-1");
var list = document.querySelector("ol");
var inputs = document.querySelector("#input-text");
var counter = document.querySelector(".count");
var all = document.querySelector("#all");
var pending = document.querySelector("#pending");
var complete = document.querySelector("#complete");
var clear = document.querySelector(".clear");
var count = document.querySelector(".count");

var arll = [];
var tags = "all";
Switch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

function queries(id) {
  if (arll[id].status) {
    document.querySelector(`#toggle${id}`).checked = true;
    document.querySelector(`#tog${id} i`).classList.add("checked");
    document.querySelector(`#list${id} .list-inputs`).classList.add("strike");
  }
  document.querySelector(`.cross-${id}`).addEventListener("click", () => {
    deleteElement(id);
  });
  document.querySelector(`#toggle${id}`).addEventListener("click", () => {
    if (document.querySelector(`#toggle${id}`).checked) {
      arll[id].status = 1;
      document.querySelector(`#tog${id} i`).classList.add("checked");
      document.querySelector(`#list${id} .list-inputs`).classList.add("strike");
    } else {
      arll[id].status = 0;

      document.querySelector(`#tog${id} i`).classList.remove("checked");
      document
        .querySelector(`#list${id} .list-inputs`)
        .classList.remove("strike");
    }
    if (tags === "complete" || tags === "pending") {
      document.querySelector(`#list${id}`).remove();
      count.innerHTML = `${list.childElementCount} items`;
    }
  });
}
function addElement(val, id) {
  var el = document.createElement("div");
  el.className = "list-items";
  el.id = `list${id}`;
  el.innerHTML = `
      <div class="circle">
        <input type="checkbox" id="toggle${id}" class="check"/>
        <label for="toggle${id}" id="tog${id}">
          <i class="fa fa-check" aria-hidden="true"></i>
        </label>
      </div>
      <div class="list-inputs">${val.text}</div>
      <i class="fas fa-times cross-${id}" aria-hidden="true"></i>
    `;
  list.append(el);
  queries(id);
}
function showlist(action) {
  removelist("clear");
  arll.forEach((val, id) => {
    if (action === "all") {
      addElement(val, id);
    }
    if (action === "pending") {
      if (val.status === 0) {
        addElement(val, id);
      }
    }
    if (action === "complete") {
      if (val.status === 1) {
        addElement(val, id);
      }
    }
  });
  count.innerHTML = `${list.childElementCount} items`;
}
function removelist(action) {
  if (action === "clear" || action === "delete") {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  if (action === "delete") {
    arll = [];
  }
  count.innerHTML = `${list.childElementCount} items`;
}

add.addEventListener("click", () => {
  const result = arll.find(({ text }) => text === inputs.value) ? 1 : 0;

  if (inputs.value === "") {
    alert("Enter Something");
    return;
  }

  if (result === 0) {
    arll.push({
      text: inputs.value,
      status: 0,
    });
    showlist(tags);
  } else {
    alert("task already exists");
  }
  inputs.value = "";
});

all.addEventListener("click", () => {
  tags = "all";
  all.classList.add("active");
  pending.classList.remove("active");
  complete.classList.remove("active");
  showlist(tags);
});

pending.addEventListener("click", () => {
  tags = "pending";
  pending.classList.add("active");
  all.classList.remove("active");
  complete.classList.remove("active");
  showlist(tags);
});

complete.addEventListener("click", () => {
  tags = "complete";
  complete.classList.add("active");
  pending.classList.remove("active");
  all.classList.remove("active");
  showlist(tags);
});

clear.addEventListener("click", () => removelist("delete"));

function deleteElement(id) {
  arll.splice(id, 1);
  showlist(tags);
}
