<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <h1>Job Application</h1>

      <label for="name">Name</label>
      <input type="text" id="name" v-model="name">

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email">

      <label for="resume">Resume</label>
      <textarea id="resume" v-model="resume"></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      resume: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('Name: ', this.name);
      console.log('Email: ', this.email);
      console.log('Resume: ', this.resume);
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1em;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 1em;
}

input, textarea {
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}

button {
  margin-top: 1em;
  padding: 0.7em 1.5em;
  font-size: 1em;
  color: #fff;
  background-color: #3f51b5;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #303f9f;
}
</style>
