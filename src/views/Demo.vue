<template>
  <div>
    <!-- Form untuk menambahkan todo -->
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" placeholder="Tambah kegiatan..." />
      <button type="submit">Tambah</button>
    </form>

    <!-- Tombol filter -->
    <div>
      <button @click="applyFilter('all')">Semua</button>
      <button @click="applyFilter('active')">Aktif</button>
    </div>

    <!-- Daftar todos -->
    <ul>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <input
          type="checkbox"
          @change="toggleTodo(todo.id)"
          :checked="todo.completed"
        />
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      newTodo: "",
      todos: [],
      filter: "all",
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else {
        return this.todos.filter((todo) => !todo.completed);
      }
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo.trim(),
          completed: false,
          id: this.todos.length + 1,
        });
        this.newTodo = "";
      }
    },
    applyFilter(filter) {
      this.filter = filter;
    },
    toggleTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
