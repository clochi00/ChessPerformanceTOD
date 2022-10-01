<template>
  <header>
    <div class="container header-container">
      <div class="apptitle">TOD Chess Performance</div>
      <router-link class="home-link" to="/">Home</router-link>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: var(--chess-color);
  color: white;
  padding: 1em;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-link {
  text-decoration: none;
  color: white;
  padding: 2px;
}

.home-link:hover {
  background-color: rgba(100, 100, 100, 0.5);
}

.apptitle {
  text-transform: uppercase;
}
</style>
