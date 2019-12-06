<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <label>
        <p :class="{ isDone: todo.isDone }" @click="taskDoneToggle(index)">
          {{ todo.task }}
        </p>
      </label>
      <div class="flex">
        <button @click="editModalToggle(index)" class="edit_btn"></button>
        <button class="delete_btn" @click="deleteTask(index)"></button>
      </div>
    </li>
    <li v-show="!$store.state.todoTasks.length">Add your tasks here.</li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      initTodos: []
    };
  },
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
    this.initTodos = JSON.parse(localStorage.getItem("todos"));
  },
  mounted() {
    if (this.initTodos) {
      this.$store.commit("todosInit", this.initTodos);
    }
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
    },
    editModalToggle(index) {
      if (this.$store.state.todoTasks[index].isDone) {
        alert("This task is already completed!");
        return;
      } else {
        this.$emit("toggle", index);
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

  p {
    position: relative;
    width: 100%;
    padding: 13px 85px 13px 19px;
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

  div {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    justify-content: space-between;
    align-items: center;
    width: 57px;
    margin: auto;

    button {
      width: 23px;
      height: 23px;
      border: 1px solid $blue;
      border-radius: 50%;
      background-color: transparent;
      background-position: center;
      background-size: 10px 10px;
      background-repeat: no-repeat;
      transition: 0.2s;

      &:hover {
        background-color: $blue;
      }

      &.delete_btn {
        background-image: url(~assets/images/close_blue.png);
        &:hover {
          background-image: url(~assets/images/close_white.png);
        }
      }

      &.edit_btn {
        background-image: url(~assets/images/edit_blue.png);
        &:hover {
          background-image: url(~assets/images/edit_white.png);
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  li {
    margin-bottom: 20px;

    p {
      padding: 10px 75px 10px 15px;
    }

    div {
      right: 10px;
    }
  }
}
</style>
