import {useStore} from "vuex";
import type {StoreType} from "../../../design/type/store";
import {designTwo} from "../../../design/fun/indexOne";

export function VHead() {
  const store=useStore<StoreType>();
  const {updateShow}=designTwo();
  return{
    store,
    updateShow,
  }
}