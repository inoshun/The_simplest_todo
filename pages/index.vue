<template>
  <main>
    <section>
      <div class="container">
        <h2>This is your To-Do list.</h2>
        <TodoForm />
        <TodoList @toggle="modaltoggle" />
        <Modal :showModal="showModal" @toggle="modaltoggle">
          <EditForm
            @toggle="modaltoggle"
            :index="index"
          />
        </Modal>
      </div>
    </section>
  </main>
</template>

<script>
import TodoForm from "@/components/Todo/TodoForm.vue";
import TodoList from "@/components/Todo/TodoList.vue";
import Modal from "@/components/UI/Modal.vue";
import EditForm from "@/components/Todo/EditForm.vue";

export default {
  components: {
    TodoForm,
    TodoList,
    Modal,
    EditForm
  },
  data() {
    return {
      showModal: false,
      index: null
    };
  },
  methods: {
    modaltoggle(index) {
      if (index != undefined) {
        this.index = index;
      }
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 60px;
  padding-bottom: 5px;
  border-bottom: 1px solid $gray;
  font-size: 28px;
}

@media screen and (max-width: 768px) {
  h2 {
    margin-bottom: 50px;
    font-size: 20px;
  }
}
</style>
