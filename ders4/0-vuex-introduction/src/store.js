import { createStore } from "vuex";
const store = createStore({
  state: {
    user: {
      name: "Mehmet Fatih",
      lname: "Nazıroğlu",
      age: 24,
      address: {},
      password: 123123,
      tc: 11111111
    },
    theme: "dark",
    fullName: "Seher Karahan",
    permissions: [1, 2, 3, 4, 5],
    userList: ["M.Fatih", "Seher", "Mari", "Serhad", "Tolga", "Müjmüj"],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" }
    ]
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    }
    // changeUser(state, payload){}
  },
  actions: {
    newItem({ commit }, item) {
      console.log("item :>> ", item);
      setTimeout(() => {
        // context.commit("newItem", item);
        commit("newItem", item);
      }, 1000);
    }
  },
  getters: {
    _woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
    _activeUser(state) {
      const user = {
        ...state.user
      };
      delete user.password;
      return user;
    }
  }
});

export default store;