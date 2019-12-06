<template>
  <form @submit.prevent>
    <div class="todoform_top">
      <div class="flex">
        <InputText className="animation" placeholder="Add a task" v-model="newItem" />
        <ButtonSmall @click="addItem">Add</ButtonSmall>
      </div>
      <ErrorText :hasError="hasError">This field can not be empty!</ErrorText>
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
import InputText from "@/components/UI/InputText.vue";
import ErrorText from "@/components/UI/ErrorText.vue";

export default {
  name: "TodoForm",
  components: {
    ButtonSmall,
    InputText,
    ErrorText
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

  .todoform_top {
    margin-bottom: 60px;

    div {
      justify-content: space-between;
      align-items: center;
    }
  }
}

@media screen and (max-width: 768px) {
  form {
    margin-bottom: 50px;

    .todoform_top {
      margin-bottom: 45px;
    }
  }
}
</style>
