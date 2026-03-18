<script>
export default {
  props: ['label', 'type', 'disabled', 'emphasis'],
}
</script>
<template>
 <button :type="type" :disabled="disabled" :class="{ [emphasis]: emphasis }">{{ label }}</button>
</template>
<style scoped>
  button {
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  .primary {
    background-color: #007bff;
  }
  .secondary {
    background-color: #555555;
  }
</style>
