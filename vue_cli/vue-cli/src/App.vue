<script>
export default {
  data() {
    return {
      contacts: [{
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
      }, {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phoneNumber: '987-654-3210',
      }],
      tasks: [{
        id: 1,
        title: 'Task 1',
        description: 'Description for Task 1',
        dueDate: '2024-07-01',
        isCompleted: false,
      }, {
        id: 2,
        title: 'Task 2',
        description: 'Description for Task 2',
        dueDate: '2024-07-15',
        isCompleted: true,
      }],
    }
  },
  computed: {
    // fullName() {
    //   return `${this.firstName} ${this.lastName}`
    // },
    // firstNameClass() {
    //   return { bold: this.isBold }
    // },
    // lastNameClass() {
    //   return { bold: this.isBold }
    // }
  },
  methods: {
    toggleCompletion(taskId) {
      const targetTask = this.tasks.find(t => t.id === taskId);

      if (targetTask) {
        targetTask.isCompleted = !targetTask.isCompleted;
      }
    },
  }
}
</script>

<template>
  <div>
   <ul>
      <info-card v-for="task in tasks" :key="task.id" :title="task.title" :description="task.description" :dueDate="task.dueDate" :is-completed="task.isCompleted" @toggle-completion="toggleCompletion(task.id)"></info-card>
    </ul>

  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;

    display: flex;
    gap: 1rem;
    flex-direction: column;

    width: 100%;
  }

  @media (min-width: 768px) {
    ul {
      flex-direction: row;

      flex-wrap: wrap;
    }
}
</style>
