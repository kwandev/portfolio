// plugins/bl-components.js

import Vue from 'vue'
import Detail from '~/components/Detail.vue'

const components = { Detail }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
