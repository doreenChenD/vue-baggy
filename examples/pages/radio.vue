<template>
  <div>
    <p>单选框</p>
    <v-radio v-model="checked" label="orange">橘子</v-radio>
    {{ checked }}

    <p>多组单选框</p>
    <v-radio v-model="fruit" label="apple">苹果</v-radio>
    <v-radio v-model="fruit" label="banana">香蕉</v-radio>
    <v-radio v-model="fruit" label="pear">梨子</v-radio>
    <div>{{ fruit }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: 'orange',
        fruit: 'banana'
      };
    }
  };
</script>

<style lang="scss" scoped>
</style>