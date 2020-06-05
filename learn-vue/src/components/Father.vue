<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text"
           v-model="title">
    <!-- <p>{{ myname }}</p> -->
    <!-- <son></son> -->
    <!-- <h1 @click="onClick">{{ title }}</h1> -->
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
    // setTimeout(() => {
    //   this.title = '更新了'
    //   this.lastname = 'Xu'
    // console.log(this.$children)
    // console.log(this)
    // setTimeout(() => {
    //   this.title = '标题变化了'
    //   this.firstname = 'Ke'
    // }, 1000)
  },
  data() {
    return {
      title: '父组件',
      firstname: 'Michael',
      lastname: 'Hsu'
      firstname: 'Michael'
    }
  },
  computed: {
    myname() {
      return `${this.firstname} ${this.lastname}`
      return this.firstname
    }
  },
  methods: {
    onClick() {
      console.log("title clicked")
    }
  }
}
</script>