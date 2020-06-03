<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ myname }}</p>
    <!-- <son></son> -->
    <input type="text" v-model="title">
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
  mounted() {
    console.log('Father', this)
    setTimeout(() => {
      this.title = '更新了'
      this.lastname = 'Xu'
    }, 1000)
  },
  data() {
    return {
      title: '父组件',
      firstname: 'Michael',
      lastname: 'Hsu'
    }
  },
  computed: {
    myname() {
      return `${this.firstname} ${this.lastname}`
    }
  }
}
</script>