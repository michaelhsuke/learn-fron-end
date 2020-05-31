<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <son></son> -->
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'Father',
  components: { Son },
  provide: {
    message: 'provided by father'
  },
  data() {
    return {
      title: '父组件'
    }
  }
}
</script>