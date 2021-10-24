const select = (item) => document.querySelector(item);
const Class = (item) => document.querySelector(item).classList;

var tags = "all";
select("#toggle").addEventListener("click", () => {
  Class("body").toggle("dark");
});

const getSet = (req, item = []) => {
  if (req === "get") {
    return JSON.parse(localStorage.getItem("task"));
  }
  if (req === "set") {
    localStorage.setItem("task", JSON.stringify(item));
  }
};

function queries(id) {
  const task = getSet("get");
  if (task[id].status) {
    select(`#toggle${id}`).checked = true;
    Class(`#tog${id} i`).add("checked");
    Class(`#list${id} .list-inputs`).add("strike");
  }
  select(`.cross-${id}`).addEventListener("click", () => {
    deleteElement(id);
  });
  select(`#toggle${id}`).addEventListener("click", () => {
    if (select(`#toggle${id}`).checked) {
      task[id] = { ...task[id], status: 1 };

      Class(`#tog${id} i`).add("checked");
      Class(`#list${id} .list-inputs`).add("strike");
    } else {
      task[id] = { ...task[id], status: 0 };

      Class(`#tog${id} i`).remove("checked");
      Class(`#list${id} .list-inputs`).remove("strike");
    }
    if (tags === "complete" || tags === "pending") {
      select(`#list${id}`).remove();
      select(".count").innerHTML = `${select("ol").childElementCount} items`;
    }
    getSet("set", task);
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
  select("ol").append(el);
  queries(id);
}
function showlist(action) {
  const task = getSet("get");
  removelist("clear");
  task.forEach((val, id) => {
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
  select(".count").innerHTML = `${select("ol").childElementCount} items`;
}
function removelist(action) {
  if (action === "clear" || action === "delete") {
    while (select("ol").firstChild) {
      select("ol").removeChild(select("ol").firstChild);
    }
  }
  if (action === "delete") {
    getSet("set", []);
  }
  select(".count").innerHTML = `${select("ol").childElementCount} items`;
}

select(".fa-plus").addEventListener("click", () => {
  var task = getSet("get") ? getSet("get") : [];
  const inputs = select("#input-text");
  const result = task.find(({ text }) => text === inputs.value) ? 1 : 0;

  if (inputs.value === "") {
    alert("Enter Something");
    return;
  }

  if (result === 0) {
    task.push({
      text: inputs.value,
      status: 0,
    });
    getSet("set", task);
    showlist(tags);
  } else {
    alert("task already exists");
  }
  inputs.value = "";
});

select("#all").addEventListener("click", () => {
  tags = "all";
  Class("#all").add("active");
  Class("#pending").remove("active");
  Class("#complete").remove("active");
  showlist(tags);
});

select("#pending").addEventListener("click", () => {
  tags = "pending";
  Class("#pending").add("active");
  Class("#all").remove("active");
  Class("#complete").remove("active");
  showlist(tags);
});

select("#complete").addEventListener("click", () => {
  tags = "complete";
  Class("#complete").add("active");
  Class("#pending").remove("active");
  Class("#all").remove("active");
  showlist(tags);
});

select(".clear").addEventListener("click", () => removelist("delete"));

function deleteElement(id) {
  var task = getSet("get");
  task.splice(id, 1);
  getSet("set", task);
  showlist(tags);
}

if (getSet("get") !== null) {
  showlist(tags);
}
