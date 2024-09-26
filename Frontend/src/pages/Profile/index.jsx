import { useParams } from "react-router-dom";
import { DataProvider } from "../../utils/DataContext";
import HNavBar from "../../components/HNavBar";
import UserPage from "../../components/UserPage";

const Profile = () => {

    const { id } = useParams();   

    return (
        
        <DataProvider userId={parseInt(id, 10)}>
            <HNavBar />
            <UserPage />                                  
        </DataProvider>
        
    )
}

export default Profile;