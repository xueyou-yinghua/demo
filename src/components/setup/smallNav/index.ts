import {useStore} from "vuex";
import {StoreType} from "../../../design/type/store";

type getters={
  show:boolean,
}

export function smallNav() {
  const store=useStore<StoreType>() as {getters:getters};


  return{
    store,
  }
}