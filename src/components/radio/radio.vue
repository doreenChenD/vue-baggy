<template>
  <label :class="radioClasses">
    <span :class="inputClasses">
      <span :class="innerClasses"></span>
      <input 
        type="radio"
        :value="label"
        :class="originalClasses"
        :checked="isChecked"
        v-model="model">
    </span>
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
      },
      label: {
        type: [String, Number]
      }
    },
    data() {
      return {
        isChecked: false
      }
    },
    computed: {
      radioClasses() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: (this.model === this.label)
          }
        ];
      },
      inputClasses() {
        return `${prefixCls}-input`;
      },
      innerClasses() {
        return `${prefixCls}-inner`;
      },
      originalClasses() {
        return `${prefixCls}-original`;
      },
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    }
  };
</script>