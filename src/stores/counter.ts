import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userName = ref('');

  const setUserName = (user: string) => {
    userName.value = user;
  };

  return { userName, setUserName };
});
