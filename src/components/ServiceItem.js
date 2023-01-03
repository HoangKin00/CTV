import { getCateList } from "../apis/handbook.js";
import Detail from "./Detail.js";

class ServiceItem {
  constructor({ img, text, detail, title }) {
    this.title = title;
    this.detail = detail;
    this.$box = document.createElement("div");
    this.$box.className = `serviceItem title col-sm-4 col-lg-2 p-3`;
    this.$box.style.fontSize = "13px";
    this.$box.addEventListener("click", () => {
      this.getHandbook();
    });

    this.$boxImg = document.createElement("div");
    this.$boxImg.className = `title-icon d-flex justify-content-center`;

    this.$img = document.createElement("img");
    this.$img.className = `rounded-circle bg-blue-600 p-2`;
    this.$img.src = img;
    this.$img.height = 50;
    this.$img.width = 50;

    this.$boxText = document.createElement("div");
    this.$boxText.className = `title-des text-center mt-1`;

    this.$text = document.createElement("span");
    this.$text.className = `text-body`;
    this.$text.innerHTML = text;
  }
  getHandbook = async () => {
    this.detail.innerHTML = "";
    const handbook = await getCateList({ title: this.$text.innerHTML });
    this.$detail = new Detail({ title: this.title, data: handbook });
    this.detail.appendChild(this.$detail.render());
  };
  render() {
    this.$box.appendChild(this.$boxImg);
    this.$boxImg.appendChild(this.$img);
    this.$box.appendChild(this.$boxText);
    this.$boxText.appendChild(this.$text);
    return this.$box;
  }
}
export default ServiceItem;
