<template>
    <ul>
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input type="checkbox" @change="$emit('toggle-todo', todo.id)" :checked="todo.completed" />
        <span>{{ todo.text }}</span>
        <button @click="$emit('delete-todo', todo.id)">Hapus</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'TodoList',
    props: {
      todos: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  