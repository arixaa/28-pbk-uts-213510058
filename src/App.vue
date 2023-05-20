<template>
  <div id="app">
    <nav>
    </nav>
    <navbar></navbar>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import Footer from './components/Footer.vue';
import FilterTodos from "./components/FilterTodos.vue";
import Demo from "./views/Demo.vue";


export default {
  name: "App",
  components: {
    navbar,
    AddTodo,
    TodoList,
    Footer,
    FilterTodos,
    Demo,
  },
  data() {
    return {
      todos: [],
      filter: "all",
      nextId: 1,
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
  height: 100vh; /* Mengatur tinggi body sesuai tinggi viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw; /* Mengatur lebar app sesuai lebar viewport */
  min-height: 100vh; /* Mengatur tinggi app minimal sesuai tinggi viewport */
}

/* Style tambahan yang Anda miliki */
.responsive-container {
  display: flex;
  flex-wrap: wrap;
}

.responsive-item {
  flex: 1 0 auto;
  margin: 10px;
  min-width: 300px;

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

