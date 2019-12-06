<template>
  <footer>
    <p>Created by inoshun</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: $darkGray;

  p {
    font-size: 16px;
    color: white;
  }
}

@media screen and (max-width: 768px) {
  footer {
    height: 50px;

    p {
      font-size: 13px;
    }
  }
}
</style>
