<template>
  <form @submit.prevent>
    <div class="flex">
      <InputText placeholder="Add a task" v-model="editedItem" />
      <ButtonSmall @click="editItem(index)">Edit</ButtonSmall>
    </div>
    <ErrorText :hasError="hasError">This field can not be empty!</ErrorText>
  </form>
</template>

<script>
import ButtonSmall from "@/components/UI/ButtonSmall.vue";
import InputText from "@/components/UI/InputText.vue";
import ErrorText from "@/components/UI/ErrorText.vue";

export default {
  name: "EditForm",
  components: {
    ButtonSmall,
    InputText,
    ErrorText
  },
  props: {
    index: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      editedItem: "",
      hasError: false
    };
  },
  mounted() {
    let index = this.index;
    this.editedItem = this.$store.state.todoTasks[index].task;
  },
  methods: {
    editItem(index) {
      this.hasError = false;

      if (this.editedItem == "") {
        this.hasError = true;
        return;
      }

      let editInfo = {
        editedItem: this.editedItem,
        taskIndex: index
      };

      this.$store.commit("editTasks", editInfo);
      this.editedItem = "";
      this.$emit("toggle");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  div {
    justify-content: space-between;
    align-items: center;
  }
}
</style>
