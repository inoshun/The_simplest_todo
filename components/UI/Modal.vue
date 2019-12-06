<template>
  <transition name="fade">
    <div v-if="showModal" class="backscreen" @click.self="$emit('toggle')">
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.backscreen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  background-color: rgba($color: #000000, $alpha: 0.5);
}
.modal {
  width: 700px;
  padding: 50px;
  background-color: white;
  border-radius: 30px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .modal {
    width: 90%;
    padding: 30px 25px;
    border-radius: 20px;
  }
}
</style>
