<template>
  <div class="container">
    <div class="login-container">
      <form>
        <input type="text" placeholder="Username" v-model="userName" required />
        <button type="submit" @click.stop.prevent="submit()">Go!</button>
      </form>
    </div>
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

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
