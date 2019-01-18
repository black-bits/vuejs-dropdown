import Vue from 'vue'
import dropdown from './components/Dropdown.vue'

const Components = {
    dropdown
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;