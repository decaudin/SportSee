import UserData from "../UserData";
import VNavBar from "../../NavBar/VNavBar";
import "./index.scss";


const UserPage = () => {

    return(
        <div className="userPage">
            <VNavBar />
            <UserData />
        </div>
    )
}

export default UserPage;