import { useContext } from "react";
import { DataContext } from '../../DataContext';


export const useData = () => {
    
    const { userId, userData, userActivity, userAverageSessions, userPerformance, isLoading, isError } = useContext(DataContext);
    return { userId, userData, userActivity, userAverageSessions, userPerformance, isLoading, isError }
}