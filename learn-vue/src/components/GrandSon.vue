<template>
  <div>
    <h4>{{ title }}</h4>
    <p>message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'GRANDSON',
  inject: [ 'message' ],
  data() {
    return {
      title: '孙子组件'
    }
  }
}
</script>