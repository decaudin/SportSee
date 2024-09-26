import { useContext } from "react";
import { DataContext } from '../../DataContext';


export const useData = () => {
    
    const { userData, userActivity, userAverageSessions, userPerformance, isLoading, isError } = useContext(DataContext);
    return { userData, userActivity, userAverageSessions, userPerformance, isLoading, isError }
}