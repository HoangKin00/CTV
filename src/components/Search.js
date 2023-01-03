class Search {
  constructor() {
    this.$col = document.createElement("div");
    this.$col.className = `col-md-9 px-3 py-2 d-flex rounded-pill bg-white`;

    this.$input = document.createElement("input");
    this.$input.className = `form-control  p-0 border-0 outline`;
    this.$input.placeholder = `Tìm kiếm`;
    this.$input.type = `text`;

    this.$button = document.createElement("button");
    this.$button.className = `bg-white border-0 p-0`;

    this.$icon = document.createElement("i");
    this.$icon.className = `bi bi-search`;
  }
  render() {
    this.$col.appendChild(this.$input);
    this.$col.appendChild(this.$button);
    this.$button.appendChild(this.$icon);
    return this.$col;
  }
}
export default Search;
