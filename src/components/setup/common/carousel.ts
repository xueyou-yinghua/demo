import {useStore} from "vuex";
import {StoreType} from "../../../design/type/store";
import {computed, reactive} from "vue";

export function carousel() {

  const store=useStore<StoreType>();

  const packageData=reactive({
    show:false,
  });

  const show=()=>{
    packageData.show=true;
  };
  const unShow=()=>{
    packageData.show=false;
  };

  const style=computed(()=>{
    let value=store.state.area.width>1200?1200:store.state.area.width;
    return `height:${value/3}px`;
  });

  return {
    packageData,
    show,
    unShow,
    style,
  }
}