<template>
  <div class="container">
    <form>
      <p>Message is: {{ userName }}</p>
      <input type="text" placeholder="Username" v-model="userName" required />
      <button type="submit" @click.stop.prevent="submit()">Go!</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const userName = ref('');
const submit = () => {
  console.log(userName.value);

  router.push({ path: '/analyse', query: { username: userName.value } });
};
</script>

<style scoped></style>
