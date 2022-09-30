import { ref } from 'vue';

const progress = ref(0);

export const useLoadingProgress = () => {
  const addToProgress = (value: number) => {
    progress.value += value;
  };

  const resetProgress = () => {
    progress.value = 0;
  };

  return {
    progress,
    addToProgress,
    resetProgress,
  };
};
