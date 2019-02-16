class app {
  constructor(countries, appname) {
    this.el = document.getElementById("countries");
    this.countries = countries;
    this.appname = appname;
  }
  count = data => {
    let el = document.getElementById("counter");

    if (data) {
      let name = "student"
      if (data > 1) {
        name = "countries";
      }
      el.innerHTML = `${data} ${name}`;
    } else {
      el.innerHTML = `NO  ${name}`;
    }
    return el;
  };

  fetchAll = () => {
    let data = "";
    if (this.countries.length > 0) {
      for (let i = 0; i < this.countries.length; i++) {
        data += `<tr>`;
        data += `<td>  ${this.countries[i]} </td>`;
        data += `</tr>`;
        data += `<td><button onclick='Edit(${i})'>Edit </button></td>`;
        data += `<td><button onclick="Delete(${i})">Delete</button></td>`;
      }
    }

    this.count(this.countries.length);
    return (this.el.innerHTML = data);
  };
}
CloseInput = () => {
  document.getElementById("spoiler").style.display = "none";
};
Add = () => {
  let el = document.getElementById("add-name");

  var country = el.value;

  if (country) {
    //Add the new value

    countries.push(country.trim());
    new Storage("countries").setData(countries);

    //Reset input value

    el.value = "";
    new app(countries).fetchAll();
  }
};

Edit = item => {
  let el = document.getElementById("edit-name");
  el.value = countries[item];
  document.getElementById("spoiler").style.display = "block";
  document.getElementById("saveEdit").onsubmit = () => {
    let country = el.value;
    if (country) {
      countries.splice(item, 1, country.trim());
      new Storage("countries").setData(countries);
      new app(countries).fetchAll();
      CloseInput();
    }
  };
};
Delete = item => {
  countries.splice(item, 1);
  new Storage("countries").setData(countries);
  new app(countries).fetchAll();
};
let countries = [];
countries = new Storage("countries").fetchData();
// localStorage.setItem("countries", JSON.stringify(countries));
new app(countries).fetchAll();
