import { removeDuplicates } from "../util/util.js";

// Read API User
export const getCate = async () => {
  try {
    const response = await fetch(
      "https://scigroup.com.vn/app/handbook/services/read"
    );
    const data = await response.json();
    const group = [];
    for (let i = 0; i < data.body.length; i++) {
      if (data.body[i].hb_group !== "")
        group.push(data.body[i].hb_group.toUpperCase());
    }
    const newGroup = removeDuplicates(group);
    return newGroup;
  } catch (e) {
    console.log(e);
  }
};

export const getCateByGroup = async ({ title }) => {
  try {
    const response = await fetch(
      "https://scigroup.com.vn/app/handbook/services/read"
    );
    const data = await response.json();
    const newData = data.body.filter((item) => {
      return title === item.hb_group.toUpperCase();
    });
    const cate = [];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].hb_cate !== "")
        cate.push(newData[i].hb_cate.toUpperCase());
    }
    const newCate = removeDuplicates(cate);
    return newCate;
  } catch (e) {
    console.log(e);
  }
};

export const getCateList = async ({ title }) => {
  try {
    const response = await fetch(
      "https://scigroup.com.vn/app/handbook/services/read"
    );
    const data = await response.json();
    const newCateList = data.body.filter((item) => {
      return title === item.hb_cate.toUpperCase();
    });
    return newCateList;
  } catch (e) {
    console.log(e);
  }
};

export const getServiceDetail = async ({ title }) => {
  try {
    const response = await fetch(
      "https://scigroup.com.vn/app/handbook/services/read"
    );
    const data = await response.json();
    const newServiceDetail = data.body.filter((item) => {
      return title.toUpperCase() === item.hb_service.toUpperCase();
    });

    return newServiceDetail[0];
  } catch (e) {
    console.log(e);
  }
};
