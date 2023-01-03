import Search from "./Search.js";
import Add from "./Add.js";
import Header from "./Header.js";
import Group from "./Group.js";

class Home {
  service = "";
  constructor() {
    this.$bg = document.createElement("div");
    this.$bg.className = `bg align-items-center`;

    this.$header = new Header();

    this.$container = document.createElement("div");
    this.$container.className = `container`;

    this.$title = document.createElement("div");
    this.$title.className = `mb-4 title-main col md-6 text-center text-uppercase fs-1 fw-bold`;
    this.$title.innerHTML = `Các dịch vụ thẩm mỹ`;

    this.$row = document.createElement("div");
    this.$row.className = `row box justify-content-between mb-4`;

    this.$search = new Search();
    this.$add = new Add();
    this.$list = document.createElement("div");

    this.$group = new Group({
      containerCate: this.$list,
      detail: this.$container,
    });
  }
  render() {
    this.$bg.appendChild(this.$header.render());
    this.$bg.appendChild(this.$container);
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$row);
    this.$row.appendChild(this.$search.render());
    this.$row.appendChild(this.$add.render());
    this.$container.appendChild(this.$group.render());
    this.$container.appendChild(this.$list);

    return this.$bg;
  }
}
export default Home;
