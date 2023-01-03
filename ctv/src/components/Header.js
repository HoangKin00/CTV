import { getPage } from "../util/getPage.js";

class Header {
  constructor() {
    this.$nav = document.createElement("div");
    this.$nav.className = `header`;

    this.$search = document.createElement("div");
    this.$search.className = `header__search`;

    this.$button = document.createElement("button");
    this.$searchImg = document.createElement("img");
    this.$searchImg.src = "assets/images/search.png";

    this.$input = document.createElement("input");
    this.$input.type = "text";
    this.$input.placeholder= "Search...";

    this.$detail = document.createElement("div");
    this.$detail.className = `header__detail`;

    this.$pic = document.createElement("div");
    this.$pic.className = `header__pic`;

    this.$img = document.createElement("img");
    this.$img.src = `assets/images/admin.png`;

    this.$text = document.createElement("b");
    this.$text.innerHTML = `Admin`;

    this.$dropdown = document.createElement("div");
    this.$dropdown.className = `header__dropdown`;

    this.$dropdownImg = document.createElement("img");
    this.$dropdownImg.src = `assets/images/drop.png `;

    this.$logout = document.createElement("div");
    this.$logout.className = `header__contentDropdown`;
    this.$logout.innerHTML = "Đăng xuất";
    this.$logout.addEventListener("click", () => {
      this.clickLogout();
    });
  }
  clickLogout = () => {
    localStorage.removeItem("isLogin");
    getPage();
  };
  render() {
    this.$nav.appendChild(this.$search);
    this.$search.appendChild(this.$button);
    this.$button.appendChild(this.$searchImg);
    this.$search.appendChild(this.$input);
    this.$nav.appendChild(this.$detail);
    this.$detail.appendChild(this.$pic);
    this.$pic.appendChild(this.$img);
    this.$detail.appendChild(this.$text);
    this.$detail.appendChild(this.$dropdown);
    this.$dropdown.appendChild(this.$dropdownImg);
    this.$dropdown.appendChild(this.$logout);
    return this.$nav;
  }
}
export default Header;
