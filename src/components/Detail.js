import DetailItem from "./DetailItem.js";

class Detail {
  constructor({ data, title }) {
    this.data = data;

    this.$box = document.createElement("div");
    this.$box.className = `box2`;

    this.$title = document.createElement("p");
    this.$title.className = `title-main text-center fs-1 fw-bold text-uppercase mb-4`;
    this.$title.innerHTML = title;

    this.$row = document.createElement("div");
    this.$row.className = `row gap-2`;

    this.renderDetailItem();
  }
  renderDetailItem = () => {
    this.data.forEach((service) => {
      this.$item = new DetailItem({
        service: service.hb_service,
      });
      this.$row.appendChild(this.$item.render());
    });
  };
  render() {
    this.$box.appendChild(this.$title);
    this.$box.appendChild(this.$row);
    return this.$box;
  }
}
export default Detail;
