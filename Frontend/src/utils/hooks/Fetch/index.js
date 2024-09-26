import { useState, useEffect } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../mockData';
import { UserNormalizer } from '../../userNormalizer';

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS=== 'true';

const mockData = {
  '/user': USER_MAIN_DATA,
  '/user/activity': USER_ACTIVITY,
  '/user/average-sessions': USER_AVERAGE_SESSIONS,
  '/user/performance': USER_PERFORMANCE
};

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

      setIsError(false);
      setIsLoading(true);

      const userId = parseInt(url.split('/')[4], 10);

      if (USE_MOCKS) {
        try {
          const cleanedUrl = url.replace(/http:\/\/localhost:3000/, '').replace(/\/\d+/, '');
          const mockKey = Object.keys(mockData).find(key => {
          const keyParts = key.split('/').filter(Boolean); 
          const urlParts = cleanedUrl.split('/').filter(Boolean);
    
          return urlParts.length === keyParts.length && keyParts.every((part, index) => part === urlParts[index]);
        });
          let mockResult;

          if (mockKey) {
            mockResult = mockData[mockKey].find(item => item.id === userId || item.userId === userId);

            if (mockResult) {
              
              if (mockKey === '/user') {
                const normalizer = new UserNormalizer(mockResult);
                const normalizedData = normalizer.normalize();
                setData(normalizedData);
              } else { 
                  setData(mockResult);
              };
            } else {
                throw new Error("No matching mock data found");
            }
          }
        } catch (error) {
            console.error("Error in mock fetch:", error.message);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
      } else {
          try {

            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            const resultsArray = Array.isArray(result.data) ? result.data : [result.data];

            if (url.split('/').length === 5) {
              const userData = resultsArray.find(item => item.id === userId);
              console.log(userData);

              if (userData) {
                const normalizer = new UserNormalizer(resultsArray);
                const normalizedData = normalizer.normalize();
                setData(normalizedData);
              } else {
                  console.error("Aucun utilisateur trouvé avec cet ID.");
                  setIsError(true);
              }
              
            } else if (url.includes('/activity') || url.includes('/average-sessions') || url.includes('/performance')) {
                const userData = resultsArray.find(item => item.userId === userId);
                console.log(userData);

                if (userData) {
                  setData(userData);
                } else {
                    console.error("Aucune donnée trouvée pour cet utilisateur.");
                    setIsError(true);
                }
            }
          } catch (error) {
              console.error("Error in API fetch:", error.message);
              setIsError(true);
          } finally {
              setIsLoading(false);
          }
        }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

