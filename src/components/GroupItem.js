import { getCateByGroup } from "../apis/handbook.js";
import Service from "./Service.js";

class GroupItem {
  constructor({ title, containerCate, detail }) {
    this.containerCate = containerCate;
    this.detail = detail;

    this.$col = document.createElement("div");
    this.$col.className = `col-sm-6 col-lg-3`;

    this.$button = document.createElement("button");
    this.$button.className = `btn btn-primary w-100`;
    this.$button.innerHTML = title;
    this.$button.addEventListener("click", () => {
      this.getHandbook();
    });
  }
  getHandbook = async () => {
    this.containerCate.innerHTML = "";
    const handbook = await getCateByGroup({
      title: this.$button.innerHTML,
    });
    this.$service = new Service({
      data: handbook,
      detail: this.detail,
    });

    this.containerCate.appendChild(this.$service.render());
  };
  render() {
    this.$col.appendChild(this.$button);
    return this.$col;
  }
}
export default GroupItem;
