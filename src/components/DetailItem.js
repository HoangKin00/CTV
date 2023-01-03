import { app } from "../util/util.js";
import Modal from "./Modal.js";

class DetailItem {
  constructor({ service }) {
    this.$item = document.createElement("div");
    this.$item.className = `list-item d-flex justify-content-between bg-white p-3 rounded-pill shadow-sm mb-2`;

    this.$des = document.createElement("p");
    this.$des.innerHTML = service;

    this.$more = document.createElement("a");
    this.$more.innerHTML = `Chi tiết`;
    this.$more.style.cursor = `pointer`;
    this.$more.className = `text-primary`;
    this.$more.addEventListener("click", () => {
      this.openModal();
    });

    this.$modal = new Modal({ closeModal: this.closeModal, title: service });
  }
  closeModal = () => {
    app.removeChild(this.$modal.render());
  };
  openModal = () => {
    app.appendChild(this.$modal.render());
  };
  render() {
    this.$item.appendChild(this.$des);
    this.$item.appendChild(this.$more);
    return this.$item;
  }
}
export default DetailItem;
