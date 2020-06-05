<template>
  <div>
    <h2>{{ title }}</h2>
    <grand-son></grand-son>
    <slot></slot>
  </div>
</template>
<script>
import GrandSon from './GrandSon'
export default {
  name: 'SON',
  components: { GrandSon },
  data() {
    return {
      title: 'Son 组件'
    }
  }
  
}
</script>