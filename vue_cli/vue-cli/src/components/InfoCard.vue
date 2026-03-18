<script>
import GenericButton from './GenericButton.vue'

export default {
  components: {
    GenericButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['toggle-completion'],
}
</script>
<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p>Due Date: {{ dueDate }}</p>
    <p>Status: {{ isCompleted ? 'Completed' : 'Pending' }}</p>
    <GenericButton :label="isCompleted ? 'Mark as Pending' : 'Mark as Completed'" :emphasis="isCompleted ? 'secondary' : 'primary'" @click="$emit('toggle-completion')"/>
  </li>
</template>
<style scoped>
li {
  box-shadow: 4px 3px 9px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 4px;

  width: 100% ;
}

@media (min-width: 768px) {
    li {
      max-width: 50rem;
    }
}
</style>§
