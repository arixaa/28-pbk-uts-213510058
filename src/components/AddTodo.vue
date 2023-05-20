<template>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" placeholder="Tambah kegiatan..." />
      <button type="submit">Tambah</button>
    </form>
  </template>
  
  <script>
  export default {
    name: "AddTodo",
    data() {
      return {
        newTodo: "",
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.$emit("add-todo", { text: this.newTodo.trim(), completed: false });
          this.newTodo = "";
        }
      },
    },
  };
  </script>
  