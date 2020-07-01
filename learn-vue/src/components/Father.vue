<template>
  <div>
    <input type="text" v-model="title">
    <div>{{ xuke }}</div>
    <!-- <slot></slot>
    <slot name="hd"></slot> -->
    <!-- <h1>{{ title }}</h1> -->
    <!-- <p>{{ myname }}</p> -->
    <!-- <son></son> -->
    <!-- <h1 @click="onClick">{{ title }}</h1> -->
    <div v-demo:foo.a.b="title"></div>
  </div>
</template>

<script>
import Son from './Son'
import Vue from 'vue'
console.log(Vue.options)
import testMixin from '../mixins/test'
export default {
  name: 'Father',
  mixins: [ testMixin ],
  components: { Son },
  provide: {
    message: 'provided by father'
  },
  mounted() {
    // console.log('Father', this.$options._base ===  Vue)
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