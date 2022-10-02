<template>
  <div class="container">
    <div class="login-container">
      <p>Start by typing in your (or someone elses) chess.com username and hit GO!</p>

      <form class="user-form">
        <input class="username-input" type="text" placeholder="Username" v-model="userName" required />
        <button :class="'go-button ' + (loading ? 'inactive-btn' : '')" type="submit" @click.stop.prevent="submit()">
          Go!
        </button>
      </form>
      <p v-if="errorMsg" class="errormsg">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/login';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const { loading, errorMsg, userExists } = useLogin();

const userName = ref('');
const submit = async () => {
  if (!loading.value) {
    if (await userExists(userName.value)) {
      router.push({ path: '/analyse', query: { username: userName.value } });
    }
  }
};
</script>

<style scoped>
.errormsg {
  color: red;
}
.go-button {
  background-color: var(--chess-color);
  border: none;
  color: white;
  padding: 5px;
  cursor: pointer;
}

.form-container {
  text-align: center;
}

.inactive-btn,
.go-button:active {
  background-color: darkgray;
}

.user-form {
  padding: 4em 4em 1em;
  display: flex;
  justify-content: space-between;
}

.username-input {
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: large;
}

.username-input:focus {
  outline: none;
}

.login-container {
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 200px;
}
</style>
