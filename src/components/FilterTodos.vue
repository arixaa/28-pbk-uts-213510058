<template>
    <div>
      <button @click="applyFilter('all')">Semua</button>
      <button @click="applyFilter('active')">Aktif</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "FilterTodos",
    methods: {
      applyFilter(filter) {
        this.$emit("filter-todos", filter);
      },
    },
  };
  </script>
  