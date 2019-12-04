<template>
  <main>
    <section>
      <div class="container">
        <h2>This is your To-Do list.</h2>
        <TodoForm />
        <TodoList />
      </div>
    </section>
  </main>
</template>

<script>
import TodoForm from "@/components/Todo/TodoForm.vue";
import TodoList from "@/components/Todo/TodoList.vue";

export default {
  components: {
    TodoForm,
    TodoList
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
