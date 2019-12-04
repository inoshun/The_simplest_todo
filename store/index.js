export const state = () => ({
  todoTasks: []
});

export const mutations = {
  addTasks(state, newTask) {
    state.todoTasks.push(newTask);
  },
  taskDoneToggle(state, index) {
    state.todoTasks[index].isDone = !state.todoTasks[index].isDone;
  },
  deleteTask(state, index) {
    state.todoTasks.splice(index, 1);
  },
  deleteCompletedTasks(state) {
    const checkIncompleted = task => {
      return !task.isDone;
    };
    state.todoTasks = state.todoTasks.filter(checkIncompleted);
  }
};
