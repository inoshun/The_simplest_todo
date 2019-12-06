<template>
  <p v-if="hasError">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "ErrorText",
  props: {
    hasError: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  width: 100%;
  margin-top: 10px;
  color: red;
}
</style>
