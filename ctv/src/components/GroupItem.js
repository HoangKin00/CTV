import { getCateByGroup } from "../apis/handbook.js";
import Service from "./Service.js";

class GroupItem {
  constructor({ title, containerCate, detail }) {
    this.containerCate = containerCate;
    this.detail = detail;

    this.$ul = document.createElement("ul");

    this.$button = document.createElement("li");
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
      removeService:this.removeService
    });

    this.containerCate.appendChild(this.$service.render());
  };
  removeService = ()=>{
    this.containerCate.removeChild(this.$service.render());
  }
  render() {
    this.$ul.appendChild(this.$button);
    return this.$ul;
  }
}
export default GroupItem;
