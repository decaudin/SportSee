import UserData from "../UserData";
import VNavBar from "../VNavBar";
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