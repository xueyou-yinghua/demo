import {computed, reactive, watchEffect} from "vue";
import {useRoute} from "vue-router";
import type {routerText} from "../../../design/type/indexOne";

enum id{
  one,
  two,
  three,
  four,
  five
}
type list={
  lists:routerText[]
  key:string
}

export function nav() {
  const route=useRoute();

  const listView=reactive<list>({
    lists:[
      {id:'one',text:'世界观',url:'/world'},
      {id:'two',text:'角色',url:'/character'},
      {id:'three',text:'设定集',url:'/sd'},
      {id:'four',text:'注册',url:'/register'},
      {id:'five',text:'登录',url:'/login'},
    ],
    key:'no',
  });
  watchEffect(()=>{
    let value=0;
    if (route.path === '/') {
      listView.key = 'no';
    } else {
      for (let list of listView.lists) {
        if (route.path.includes(list.url)) {
          listView.key = list.id as string;
          break;
        }
        value += 1;
      }
      if (value === 6) {
        listView.key = 'no';
      }
    }
  });
  const style=computed(()=>{
    switch (listView.key) {
      case 'one':
      case 'two':
      case 'three':
      case 'four':
      case 'five':
        return `right:${10+120*(4-id[listView.key])}px`;
      default:
        return 'right:700px;opacity:0';
    }
  });
  return{
    listView,
    style
  }
}