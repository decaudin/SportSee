import { useFetch } from '../Fetch/index.js';

export const useUserData = (userId) => {

  const { data: userData, isLoading: isLoadingUserData, isError: isErrorUserData } = useFetch(`http://localhost:3000/user/${userId}`);
  const { data: userActivity, isLoading: isLoadingUserActivity, isError: isErrorUserActivity } = useFetch(`http://localhost:3000/user/${userId}/activity`);
  const { data: userAverageSessions, isLoading: isLoadingUserAverageSessions, isError: isErrorUserAverageSessions } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
  const { data: userPerformance, isLoading: isLoadingUserPerformance, isError: isErrorUserPerformance } = useFetch(`http://localhost:3000/user/${userId}/performance`);

  const isLoading = isLoadingUserData || isLoadingUserActivity || isLoadingUserAverageSessions || isLoadingUserPerformance;
  const isError = isErrorUserData || isErrorUserActivity || isErrorUserAverageSessions || isErrorUserPerformance;

  return { userData, userActivity, userAverageSessions, userPerformance, isLoading, isError };
};
