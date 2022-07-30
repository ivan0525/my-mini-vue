<script lang="ts">
import {defineComponent, provide, reactive, ref, toRefs} from 'vue'
import Bar from './Bar.vue'
export default defineComponent({
  name: 'Foo',
  components: {
    Bar
  },
  emits: ['change-data'],
  props: {
    model: {
      type: Object,
      required: true
    },
    testId: String
  },
  setup(props) {
    const count = ref(0)
    provide('Foo', reactive(props))
    return {
      count
    }
  }
})
</script>
<template>
  <div>
    foo: <button @click="$emit('change-data')">change model</button>
  </div>
  <Bar />
</template>