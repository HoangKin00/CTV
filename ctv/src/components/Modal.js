import { getServiceDetail } from "../apis/handbook.js";
import ModalDetail from "./ModalDetail.js";

class Modal {
  constructor({ closeModal, title }) {
    this.title = title;
    this.$container = document.createElement("div");
    this.$container.className = `modal d-block align-items-center justify-content-center"`;
    this.$container.style.background = "rgba(0,0,0,0.7)";

    this.$dialog = document.createElement("div");
    this.$dialog.className = `modal-dialog w-100`;

    this.$content = document.createElement("div");
    this.$content.className = `modal-content`;

    this.$header = document.createElement("div");
    this.$header.className = `modal-header`;

    this.$title = document.createElement("h5");
    this.$title.className = `modal-title`;
    this.$title.innerHTML = `Thông tin chi tiết`;

    this.$closeBtn = document.createElement("button");
    this.$closeBtn.className = `btn-close`;
    this.$closeBtn.addEventListener("click", () => {
      closeModal();
    });

    this.$body = document.createElement("div");
    this.$body.className = `modal-body px-4`;

    this.$border = document.createElement("div");
    this.$border.className = `bg-white`;

    this.$footer = document.createElement("div");
    this.$footer.className = `modal-footer`;

    this.$fix = document.createElement("button");
    this.$fix.className = `btn btn-primary`;
    this.$fix.innerHTML = `Sửa`;

    this.$dele = document.createElement("button");
    this.$dele.className = `btn btn-outline-primary`;
    this.$dele.innerHTML = `Xóa`;
    this.renderItem();
  }
  renderItem = async () => {
    const detailService = await getServiceDetail({ title: this.title });
    this.$define = new ModalDetail({
      title: "Định nghĩa",
      value: detailService.hb_description,
    });
    this.$unit = new ModalDetail({
      title: "Đơn vị liệu trình",
      value: detailService.hb_unit,
    });
    this.$treatment = new ModalDetail({
      title: "Liệu trình",
      value: detailService.hb_treatment,
    });
    this.$procedure = new ModalDetail({
      title: "Phương pháp vô cảm",
      value: detailService.hb_procedure,
    });
    this.$execution = new ModalDetail({
      title: "Thời gian thực hiện",
      value: detailService.hb_execution_time,
    });
    this.$recovery = new ModalDetail({
      title: "Thời gian phục hiện",
      value: detailService.hb_recovery_time,
    });
    this.$adjust = new ModalDetail({
      title: "Điều chỉnh",
      value: detailService.hb_adjust,
    });
    this.$border.innerHTML = "";
    this.$border.appendChild(this.$define.render());
    this.$border.appendChild(this.$unit.render());
    this.$border.appendChild(this.$treatment.render());
    this.$border.appendChild(this.$procedure.render());
    this.$border.appendChild(this.$execution.render());
    this.$border.appendChild(this.$recovery.render());
    this.$border.appendChild(this.$adjust.render());
  };
  render() {
    this.$container.appendChild(this.$dialog);
    this.$dialog.appendChild(this.$content);
    this.$content.appendChild(this.$header);
    this.$content.appendChild(this.$body);
    this.$content.appendChild(this.$footer);
    this.$footer.append(this.$fix);
    this.$footer.append(this.$dele);
    this.$header.appendChild(this.$title);
    this.$header.appendChild(this.$closeBtn);

    this.$body.appendChild(this.$border);

    return this.$container;
  }
}
export default Modal;
