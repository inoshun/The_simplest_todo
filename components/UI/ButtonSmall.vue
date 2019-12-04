<template>
  <button v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonSmall"
};
</script>

<style lang="scss" scoped>
button {
  height: 50px;
  padding: 0 30px;
  background-color: $blue;
  border-radius: 10px;
  color: white;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    border-radius: 35px;
  }
}
@media screen and (max-width: 768px) {
  button {
    height: 45px;
    padding: 0 20px;
  }
}
</style>
