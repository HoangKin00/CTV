import { getCate } from "../apis/handbook.js";
import GroupItem from "./GroupItem.js";

class Group {
  constructor({ containerCate, detail }) {
    this.containerCate = containerCate;
    this.detail = detail;
    this.$col = document.createElement("div");
    this.$col.className = `sidebar`;

    this.$box = document.createElement("div");
    this.$box.className = `sidebar__box`;

    this.$logo = document.createElement("div");
    this.$logo.className = `sidebar__logo`;

    this.$logoImg = document.createElement("img");
    this.$logoImg.src = `assets/images/logo.png`;

    this.$sidebarPic = document.createElement("div");
    this.$sidebarPic.className = `sidebar__pic`;

    this.$menuImg = document.createElement("img");
    this.$menuImg.src = `assets/images/menu-m.svg`;

    this.$sidebarMenu = document.createElement("div");
    this.$sidebarMenu.className = `sidebar__menu`;
    
    this.$homeImg = document.createElement("img");
    this.$homeImg.src = `assets/images/home.png`;

    this.$ul = document.createElement("ul");

    this.renderGroup();
  }
  renderGroup = async () => {
    const cates = await getCate();
    cates.forEach((e) => {
      this.$item = new GroupItem({
        detail: this.detail,
        title: e,
        containerCate: this.containerCate,
      });
      this.$ul.appendChild(this.$item.render());
    });
  };
  render() {
    this.$col.appendChild(this.$box);
    this.$box.appendChild(this.$logo);
    this.$logo.appendChild(this.$logoImg);
    this.$box.appendChild(this.$sidebarPic);
    this.$sidebarPic.appendChild(this.$menuImg);
    this.$col.appendChild(this.$sidebarMenu);
    this.$sidebarMenu.appendChild(this.$homeImg);
    this.$sidebarMenu.appendChild(this.$ul);
    return this.$col;
  }
}
export default Group;
