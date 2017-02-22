import Button from './components/button';
import Icon from './components/icon';
import Radio from './components/radio';

import './styles/index.scss';

const components = {
  Button,
  Icon,
  Radio
};

const install = function(Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    let component = components[key];
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default Object.assign(components, { install });