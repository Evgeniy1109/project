import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    card: [],
    quantity: 0,
    sum: 0
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CARD(state) {
      return state.card;
    },
    QUANTITY(state) {
      return state.quantity
    },
    SUM(state) {
      return state.sum
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CARD: (state, product) => {
      if (product.quantity === 0){
        state.card.push(product);
        product.quantity++;
      } else {
        product.quantity++;
      }
      state.sum += product.price;
    },
    REMOVE_FROM_CARD: (state, index) => {
      if (state.card[index].quantity ===0 ) {
        state.card.splice(index, 1);
      } else {
       state.card[index].quantity--;
       state.sum -= state.card[index].price;
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CARD({ commit }, product) {
      commit("SET_CARD", product);
    },
    DELETE_FROM_CARD({ commit }, index) {
      commit("REMOVE_FROM_CARD", index);
    },

  },
  modules: {},
});
