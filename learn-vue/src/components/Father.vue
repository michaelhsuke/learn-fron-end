<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title">
    <!-- <p>{{ myname }}</p> -->
    <!-- <son></son> -->
    <!-- <h1 @click="onClick">{{ title }}</h1> -->
    <div v-demo:foo.a.b="title"></div>
  </div>
</template>

<script>
import Son from './Son'
import '../directives/demo.js'
export default {
  name: 'Father',
  components: { Son },
  provide: {
    message: 'provided by father'
  },
  mounted() {
    console.log('Father', this)
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