
import Header from "./Header.js";
import Group from "./Group.js";

class Home {
  service = "";
  constructor() {
    this.$container = document.createElement("div");
    this.$container.className = `container`;

    this.$bg = document.createElement("div");
    this.$bg.className = `body`;

    this.$list = document.createElement("div");

    this.$group = new Group({
      containerCate: this.$list,
      detail: this.$container,
    });

    this.$des = document.createElement("div");
    this.$des.className = "des";

    this.$header = new Header();
  }
  render() {
    this.$container.appendChild(this.$bg);
    this.$bg.appendChild(this.$group.render());
    this.$bg.appendChild(this.$list);
    this.$bg.appendChild(this.$des);
    this.$des.appendChild(this.$header.render());

    return this.$container;
  }
}
export default Home;
