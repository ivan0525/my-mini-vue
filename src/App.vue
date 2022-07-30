<template>

  <Foo :model="model" @change-data="handleModelChange"/>
  
</template>

<script>
// import {ref, computed, onMounted, reactive, provide} from 'vue'
import Foo from './components/Foo.vue'
export default {
  name: 'App',
  components: {
    Foo
  },
  data() {
    return {
      model: {
        name: 'baby',
        age: 18,
        sex: '女'
      }
    }
  },
  methods: {
    handleModelChange() {
      this.model = {
        name: '小何',
        age: 20,
        sex: '女'
      }
    }
  }
}
// let num = ref(1)
// const model = reactive({
//   name: 'baby',
//   age: 18,
//   sex: '女'
// })
// let double = computed(()=>num.value*2)
// function add(){
//   num.value++
// }
// onMounted(()=>{
//   console.log('mounted')
// })

// function handleModelChange() {
//   model.age = 20
// }
</script>