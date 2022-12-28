let personald = new Array();
let stored_personal = [];
personald.push(JSON.parse(localStorage.getItem("personali")));
var businessd = [];
businessd.push(JSON.parse(localStorage.getItem("businessi")));
let otherd = [];
otherd.push(JSON.parse(localStorage.getItem("otheri")));

function add() {
  let input = document.getElementById("input_box").value;
  let tasks = document.getElementsByClassName("tasks")[0];
  let categories = document.getElementsByClassName("categorydiv")[0];

  let personal = document.getElementById("personal").checked;
  let business = document.getElementById("business").checked;
  let other = document.getElementById("other").checked;

  if (personal == true) {
    personald.push(input);
    localStorage.setItem("personali", JSON.stringify(personald));
    show();
  } else if (business == true) {
    businessd.push(input);
    localStorage.setItem("businessi", JSON.stringify(businessd));
    show();
  } else {
    otherd.push(input);
    localStorage.setItem("otheri", JSON.stringify(otherd));
    show();
  }
}

function clear1() {
  document.getElementsByClassName("tasks")[0].innerText = "";
}

function clear2() {
  document.getElementsByClassName("tasks")[0].innerText = "";
  localStorage.clear();
  location.reload();
}

function show() {
  clear1();
  personald.forEach((item) => {
    display_element("personal", item);
  });

  businessd.forEach((item) => {
    display_element("business", item);
  });

  otherd.forEach((item) => {
    display_element("other", item);
  });
}

function display_element(type, item) {
  if (item !== null) {
    let input = document.getElementById("input_box").value;
    let tasks = document.getElementsByClassName("tasks")[0];
    let categories = document.getElementsByClassName("categorydiv")[0];

    let p = document.createElement("p");
    let tag = document.createElement("p");
    let i = document.createElement("i");
    if (type === "personal") {
      i.classList.add("fa-sharp");
      i.classList.add("fa-solid");
      i.classList.add("fa-user-astronaut");
    } else if (type === "business") {
      i.classList.add("fa-sharp");
      i.classList.add("fa-solid");
      i.classList.add("fa-bolt");
    } else {
      i.classList.add("fa-solid");
      i.classList.add("fa-user-secret");
    }
    i.classList.add("icon");
    i.style.color = "white";
    tag.classList.add("tag");
    tag.appendChild(i);

    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    tag.style.marginTop = "10px";
    p.classList.add("todos");
    p.innerText = item;

    div.appendChild(p);
    div.appendChild(tag);
    tasks.appendChild(div);
  }
}

function first_show() {
  personald[0].forEach((item) => {
    display_element("personal", item);
  });

  businessd[0].forEach((item) => {
    display_element("business", item);
  });
  otherd[0].forEach((item) => {
    display_element("other", item);
  });
}

function remove_null() {
  personald[0].forEach((elements) => {
    if (elements !== null) {
      stored_personal.push(elements);
    }
  });
}

first_show();
remove_null();
