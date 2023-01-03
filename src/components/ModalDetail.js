class ModalDetail {
  constructor({ title, type, value, disabled }) {
    this.$container = document.createElement("div");
    this.$container.className = "mb-3";

    this.$title = document.createElement("div");
    this.$title.innerHTML = title;

    this.$input = document.createElement("input");
    this.$input.className = "form-control";
    this.$input.type = type || "text";
    this.$input.value = value || "";
    this.$input.disabled = disabled || true;
  }
  render() {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$input);
    return this.$container;
  }
}
export default ModalDetail;
