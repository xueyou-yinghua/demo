import {createStore} from "vuex";
import {area, StoreType} from "../design/type/store";

const store=createStore<StoreType>({
  state:{
    area:{
      height:0,
      width:0,
    },
    showNav:false,
  },
  mutations:{
    uptArea:(state, payload:area) => {
      state.area = payload
    },
    uptShowNav:(state, payload:boolean) => {
      state.showNav=payload;
    }
  },
  getters:{
    show:state => {
      return 1000 >= state.area.width&&state.showNav;
    }
  }
});

export default store;