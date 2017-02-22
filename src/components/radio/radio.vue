<template>
  <label>
    <input 
      type="radio"
      :class="wrapClasses">
    <slot>{{ value }}</slot>
  </label>
</template>

<script>
  const prefixCls = 'v-radio';

  export default {
    name: prefixCls,
    props: {
      value: {
        type: [String, Number]
      }
    },
    computed: {
      wrapClasses() {
        return [
          `${prefixCls}-wrapper`
        ];
      }
    }
  };
</script>