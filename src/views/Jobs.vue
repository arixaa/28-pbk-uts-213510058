<template>
  <div>
    <h2>Lowongan Pekerjaan</h2>
    <p>Terima kasih atas minat Anda untuk bergabung dengan tim kami! Berikut ini adalah beberapa lowongan pekerjaan yang saat ini tersedia:</p>
    <ul>
      <li>Front-end Developer: Bertanggung jawab untuk mengembangkan antarmuka pengguna aplikasi ToDo menggunakan Vue.js dan HTML/CSS.</li>
      <li>Back-end Developer: Bertanggung jawab untuk mengembangkan logika bisnis dan API backend untuk aplikasi ToDo menggunakan Node.js dan Express.</li>
      <li>UI/UX Designer: Bertanggung jawab untuk merancang tampilan antarmuka yang intuitif dan menarik untuk aplikasi ToDo.</li>
      <li>Quality Assurance Engineer: Bertanggung jawab untuk menguji dan memastikan kualitas tinggi dari aplikasi ToDo sebelum rilis.</li>
    </ul>
    <p>Jika Anda tertarik dengan salah satu posisi di atas atau ingin berdiskusi lebih lanjut, silakan hubungi atau lakukan <router-link to="/jobs/apply">Apply</router-link>.</p>
  </div>
</template>

<script>
export default {
  name: 'Jobs',
}
</script>

<style scoped>
h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
