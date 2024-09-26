import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useUserData } from '../hooks/ApiService';

export const DataContext = createContext();

export const DataProvider = ({ userId, children }) => {
 
  const { userData, userActivity, userAverageSessions, userPerformance, isLoading, isError } = useUserData(userId);

  return (
    <DataContext.Provider value={{ userData, userActivity, userAverageSessions, userPerformance, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  userId: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};