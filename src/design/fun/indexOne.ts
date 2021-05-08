import {useStore} from "vuex";
import type {StoreType,area} from '../type/store';

export function designOne() {
  const store=useStore<StoreType>();
  const area=(data:area)=>store.commit('uptArea',data);

  const getArea=(data?:HTMLElement)=>{
    let width,height;
    if(data){
      width=data.clientWidth;
      height=data.clientHeight;
    }else{
      width=document.documentElement.clientWidth||document.body.clientWidth;
      height=document.documentElement.clientHeight||document.body.clientHeight;
    }
    area({width,height});
  };

  return {
    area,
    getArea
  }
}


export function designTwo() {
  const store=useStore<StoreType>();

  const updateShow=(data?:boolean)=>{
    let [value=!store.state.showNav]=[data];
    store.commit('uptShowNav',value);
  };


  return{
    updateShow,
  }
}