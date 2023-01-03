import ServiceItem from "./ServiceItem.js";

class Service {
  constructor({ data, detail }) {
    this.data = data;
    this.detail = detail;

    this.$row = document.createElement("div");
    this.$row.className = `row box mt-4`;
    this.renderCate();
  }
  renderCate = () => {
    this.data.forEach((e) => {
      this.$item = new ServiceItem({
        detail: this.detail,
        title: e,
        img: "../assets/images/kn_favicon.ico",
        text: e,
      });
      this.$row.appendChild(this.$item.render());
    });
  };

  render() {
    return this.$row;
  }
}
export default Service;
