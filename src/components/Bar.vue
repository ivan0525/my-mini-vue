<script lang="ts">
import {defineComponent, inject} from 'vue'
export default defineComponent({
  name: 'Bar',
  setup() {
    const fooData = inject('Foo')
    return {
      fooData
    }
  }
})
</script>
<template>
  <div>
    bar获取的foo中的data：{{fooData}}
  </div>
</template>