import Vue from 'vue'
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify

    el.innerHTML = s(binding)
  }
})