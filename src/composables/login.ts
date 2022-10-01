import { ref } from 'vue';
import { useProvider } from './provider';

export const useLogin = () => {
  const loading = ref(false);
  const errorMsg = ref(undefined as undefined | string);
  const { playerService } = useProvider();

  const userExists = async (username: string): Promise<boolean> => {
    loading.value = true;
    const response = await playerService.getPlayerByName(username);
    errorMsg.value = response.statuscode ? getErrorByStatus(response.statuscode) : 'Internal Error';
    loading.value = false;
    return response.data !== undefined;
  };

  const getErrorByStatus = (statuscode: number): string | undefined => {
    switch (statuscode) {
      case 200:
      case 201:
      case 203:
        return undefined;
      case 404:
        return 'User not found';
      default:
        return 'Failed to reach chess.com api';
    }
  };

  return {
    loading,
    errorMsg,
    userExists,
  };
};
