class Storage {
  constructor(dataname) {
    this.dataname = dataname;
    this.localContent = localStorage.getItem(this.dataname);
  }

  fetchData = () => {
    let localArray;
    console.log(this.dataname);
    console.log(typeof this.dataname);
    console.log(this.localContent);
    if (this.localContent === null) {
      localArray = [];
    } else {
      localArray = JSON.parse(this.localContent);
    }
    return localArray;
  };

  setData = data => {
    //Store data as string of Array
    localStorage.setItem(this.dataname, JSON.stringify(data));
  };
}
let names = ["Nuts", "kiss"];
console.log(new Storage("names").setData(names));
