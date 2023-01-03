import ServiceItem from "./ServiceItem.js";

class Service {
  constructor({ data, detail,removeService }) {
    
    this.data = data;
    this.detail = detail;

    this.$row = document.createElement("div");
    this.$row.className = `service`;

    this.$box = document.createElement("div");
    this.$box.className = `service__box`;

    this.$back = document.createElement("div");
    this.$back.className = `service__back`;
    this.$backBtn = document.createElement("button");
    this.$backBtn.innerHTML = `Quay lại`;
    this.$backBtn.addEventListener('click',()=>{
      removeService()
    })

    this.$add = document.createElement("div");
    this.$add.className = `service__add`;
    this.$addBtn = document.createElement("button");
    this.$addBtn.innerHTML = `Thêm mới`;

    this.$content = document.createElement("div");
    this.$content.className = `serviceItem`;

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
      this.$content.appendChild(this.$item.render());
    });
  };

  render() {
    this.$row.appendChild(this.$box);
    this.$box.appendChild(this.$back);
    this.$back.appendChild(this.$backBtn);
    this.$box.appendChild(this.$add);
    this.$add.appendChild(this.$addBtn);
    this.$row.appendChild(this.$content)
    return this.$row;
  }
}
export default Service;
