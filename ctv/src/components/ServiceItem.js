import { getCateList } from "../apis/handbook.js";
import Detail from "./Detail.js";
import Home from "./Home.js";
import Service from "./Service.js";
class ServiceItem {
  constructor({ img, text, detail, title }) {
    this.title = title;
    this.detail = detail;
    
    this.$box = document.createElement("div");
    this.$box.className = `serviceItem__item`;

    this.$box.addEventListener("click", () => {
      this.getHandbook();
    });

    this.$img = document.createElement("img");
    this.$img.src = img;
    this.$img.height = 40;
    this.$img.width = 40;

    this.$text = document.createElement("div");
    this.$text.className = `serviceItem__text`;
    this.$text.innerHTML = text;
  }
  getHandbook = async () => {
    this.detail.innerHTML = "";
    const handbook = await getCateList({ title: this.$text.innerHTML });
    this.$detail = new Detail({ title: this.title, data: handbook, removeServiceItem:this.removeServiceItem});
    this.detail.appendChild(this.$detail.render());
  };
  removeServiceItem = ()=>{
    this.$home = new Home();
    this.detail.removeChild(this.$detail.render());
    this.detail.appendChild(this.$home.render());
  }
  render() {
    this.$box.appendChild(this.$img);
    this.$box.appendChild(this.$text);
    return this.$box;
  }
}
export default ServiceItem;
