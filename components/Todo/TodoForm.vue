<template>
  <form @submit.prevent>
    <div class="todoform_top">
      <div class="flex">
        <input type="text" placeholder="Add a task" v-model="newItem" />
        <ButtonSmall @click="addItem">Add</ButtonSmall>
      </div>
      <p class="errorText" :class="{ show: hasError }">
        This field can not be empty!
      </p>
    </div>
    <div class="todoform_bottom">
      <ButtonSmall
        v-if="$store.state.todoTasks.length"
        @click="deleteCompletedTasks"
        >Delete all completed tasks.</ButtonSmall
      >
    </div>
  </form>
</template>

<script>
import ButtonSmall from "@/components/UI/ButtonSmall.vue";
export default {
  name: "TodoForm",
  components: {
    ButtonSmall
  },
  data() {
    return {
      newItem: "",
      hasError: false
    };
  },
  methods: {
    addItem() {
      this.hasError = false;

      if (this.newItem == "") {
        this.hasError = true;
        return;
      }

      let todo = {
        task: this.newItem,
        isDone: false
      };

      this.$store.commit("addTasks", todo);
      this.newItem = "";
    },
    deleteCompletedTasks() {
      let completedTasks = this.$store.state.todoTasks.filter(task => {
        return task.isDone;
      });

      if (!completedTasks.length) {
        alert("No tasks completed!");
        return;
      }

      if (confirm("Are you sure?")) {
        this.$store.commit("deleteCompletedTasks");
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  margin-bottom: 70px;
  font-size: 16px;

  .todoform_top {
    margin-bottom: 40px;

    div {
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      input {
        width: 450px;
        height: 50px;

        padding: 0 20px;
        border: 1px solid $superLightGray;
        border-radius: 35px;
        background-color: $superLightGray;
        outline: none;
        transition: 0.3s ease-out;

        &:focus {
          width: 600px;
          background-color: white;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  form {
    margin-bottom: 50px;
    font-size: 14px;

    .todoform_top {
      div {
        input {
          width: 70%;
          height: 45px;

          &:focus {
            width: 70%;
          }
        }
      }
    }
  }
}
</style>
