<template>
  <footer class="footer">
    <div class="contact">
      <h2>Contact</h2>
      <p>Email: Rexiprambudiaramadhan@student.uir.ac.id</p>
      <p>Phone: +628 2284162190</p>
    </div>
    <div class="personal-profile">
      <h2>Our CEO</h2>
      <p>Name: Rexi Prambudia</p>
      <p>Occupation: Mahasiswa</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
}

.contact, .personal-profile {
  text-align: left;
}
</style>
