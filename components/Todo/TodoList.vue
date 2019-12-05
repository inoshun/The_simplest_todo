<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <label>
        <p :class="{ isDone: todo.isDone }" @click="taskDoneToggle(index)">
          {{ todo.task }}
        </p>
      </label>
      <button @click="deleteTask(index)"></button>
    </li>
    <li v-show="!$store.state.todoTasks.length">Add your tasks here.</li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    todos() {
      let todos = this.$store.state.todoTasks;
      if (process.client) {
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      return todos;
    }
  },
  beforeMount() {
    let todoTasks = JSON.parse(localStorage.getItem("todos"));
    this.$store.commit("todosInit", todoTasks);
  },
  methods: {
    taskDoneToggle(index) {
      this.$store.commit("taskDoneToggle", index);
    },
    deleteTask(index) {
      let text = "";

      if (this.$store.state.todoTasks[index].isDone) {
        text = "Are you sure?";
      } else {
        text = "This task is not completed! Do you want to delete it?";
      }
      let r = confirm(text);
      if (r) {
        this.$store.commit("deleteTask", index);
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  margin-bottom: 25px;
  position: relative;

  input {
    display: none;
  }

  p {
    width: 100%;
    padding: 13px 65px 13px 19px;
    cursor: pointer;
    box-shadow: $shadowSmall;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      box-shadow: $shadowLarge;
    }

    &.isDone {
      box-shadow: none !important;
      background-color: $lightGray;
      text-decoration: line-through;
    }
  }

  button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    width: 23px;
    height: 23px;
    margin: auto;
    border: 1px solid $blue;
    border-radius: 50%;
    background-color: transparent;
    background-image: url(~assets/images/close_blue.png);
    background-position: center;
    background-size: 10px 10px;
    background-repeat: no-repeat;
    transition: 0.2s;

    &:hover {
      background-color: $blue;
      background-image: url(~assets/images/close_white.png);
    }
  }
}

@media screen and (max-width: 768px) {
  li {
    margin-bottom: 20px;

    p {
      padding: 10px 50px 10px 15px;
    }
  }
}
</style>
