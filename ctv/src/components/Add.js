class Add {
  constructor() {
    this.$col = document.createElement("div");
    this.$col.className = `col-md-2`;

    this.$button = document.createElement("button");
    this.$button.className = `btn w-100 btn-primary`;
    this.$button.innerHTML = `Thêm dịch vụ`;
    this.$button.style.minWidth = `130px`;
  }
  render() {
    this.$col.appendChild(this.$button);
    return this.$col;
  }
}
export default Add;
