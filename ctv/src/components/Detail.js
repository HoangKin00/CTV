import DetailItem from "./DetailItem.js";

class Detail {
  constructor({ data, title, removeServiceItem }) {
    this.data = data;

    this.$box = document.createElement("div");
    this.$box.className = `box2`;

    this.$title = document.createElement("p");
    this.$title.className = `title-main text-center fs-1 fw-bold text-uppercase mb-4`;
    this.$title.innerHTML = title;
 
    this.$detail = document.createElement("div");
    this.$detail.className = `service__box`;

    this.$back = document.createElement("div");
    this.$back.className = `service__back`;
    this.$backBtn = document.createElement("button");
    this.$backBtn.innerHTML = `Quay lại`;
    this.$backBtn.addEventListener('click',()=>{
      removeServiceItem()
    })

    this.$add = document.createElement("div");
    this.$add.className = `service__add`;
    this.$addBtn = document.createElement("button");
    this.$addBtn.innerHTML = `Thêm mới`;


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
    this.$box.appendChild(this.$detail);
    this.$detail.appendChild(this.$back);
    this.$back.appendChild(this.$backBtn);
    this.$detail.appendChild(this.$add);
    this.$add.appendChild(this.$addBtn);
    this.$box.appendChild(this.$row);
    return this.$box;
  }
}
export default Detail;
