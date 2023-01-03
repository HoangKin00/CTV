const URL = "https://scigroup.com.vn/app/handbook/users/read";

const getAllUser = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.body;
  } catch (e) {
    console.log(e);
    return;
  }
};

const getUserByUsername = async (username) => {
  try {
    const allUser = await getAllUser();
    const user = allUser.filter((e) => {
      return e.user_login === username;
    });
    return user[0];
  } catch (e) {
    console.log(e);
    return;
  }
};

const login = async (username, password) => {
  try {
    const user = await getUserByUsername(username);
    if (!user) {
      console.log("user not found");
      return;
    }
    if (username !== user.user_login || password !== user.user_pass) {
      console.log("wrong phone number or passsword");
      return;
    }
    return {
      username: user.user_login,
      password: user.user_pass,
      isLogin: true,
    };
  } catch (e) {
    console.log(e);
    return;
  }
};
export { login };
