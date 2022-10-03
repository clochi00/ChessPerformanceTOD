import { ref } from 'vue';

const daysBack = ref(30);
export const useTimeFilter = () => {
  const setTimeFilter = (newValue: number) => {
    daysBack.value = newValue;
  };
  return { daysBack, setTimeFilter };
};
