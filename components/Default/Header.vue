<template>
  <header>
    <h1>The Simplest To-Do</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: white;
  box-shadow: $shadowLarge;

  h1 {
    font-size: 34px;
    font-weight: 700;
    color: $darkBlue;
  }
}

@media screen and (max-width: 768px) {
  header {
    height: 60px;

    h1 {
      font-size: 24px;
    }
  }
}
</style>
