import { getCate } from "../apis/handbook.js";
import GroupItem from "./GroupItem.js";

class Group {
  constructor({ containerCate, detail }) {
    this.containerCate = containerCate;
    this.detail = detail;
    this.$row = document.createElement("div");
    this.$row.className = `row box mb-4`;

    this.renderGroup();
  }
  renderGroup = async () => {
    const cates = await getCate();
    cates.forEach((e) => {
      this.$item = new GroupItem({
        detail: this.detail,
        title: e,
        containerCate: this.containerCate,
      });
      this.$row.appendChild(this.$item.render());
    });
  };
  render() {
    return this.$row;
  }
}
export default Group;
