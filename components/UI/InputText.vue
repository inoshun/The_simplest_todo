<template>
  <input
    type="text"
    :class="className"
    :placeholder="placeholder"
    v-bind="$attrs"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    className: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 450px;
  height: 50px;
  padding: 0 20px;
  border: 1px solid $superLightGray;
  border-radius: 35px;
  background-color: white;
  outline: none;
  font-size: 16px;

  &.animation {
    background-color: $superLightGray;
    transition: 0.3s ease-out;
    &:focus {
      width: 600px;
      background-color: white;
    }
  }
}

@media screen and (max-width: 768px) {
  input {
    width: 70% !important;
    height: 45px;
    font-size: 14px;

    &:focus {
      width: 70% !important;
    }
  }
}
</style>
