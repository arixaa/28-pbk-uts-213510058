<template>
  <div id="app">
    <h1>Daftar Kegiatan</h1>
    <AddTodo @add-todo="addTodo" />
    <TodoList
      :todos="filteredTodos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
    <FilterTodos @filter-todos="changeFilter" />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    TodoList,
    FilterTodos,
  },
  data() {
    return {
      todos: [],
      filter: "all",
      nextId: 1, // Tambahkan variabel ini untuk menyimpan ID berikutnya
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else {
        return this.todos.filter((todo) => todo.completed);
      }
    },
  },
  methods: {
    addTodo(newTodo) {
      // Tambahkan properti `id` ke objek `todo` baru, lalu tambahkan nilai `nextId`
      newTodo.id = this.nextId++;
      this.todos.push(newTodo);
    },
    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    changeFilter(newFilter) {
      this.filter = newFilter;
    },
  },
};
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

input[type="checkbox"] {
  margin-right: 1rem;
}

button {
  background-color: #ff6b81;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #ff4d6a;
}
</style>
