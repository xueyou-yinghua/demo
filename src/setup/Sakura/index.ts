import {onBeforeMount, onMounted, reactive} from 'vue';
import {designOne} from "../../design/fun/indexOne";

export function sk() {
  const {getArea}=designOne();
  const every=()=>getArea();

  onMounted(()=>{
    every();
    window.addEventListener('resize',every);
  });
  onBeforeMount(()=>{
    window.removeEventListener('resize',every);
  });
}