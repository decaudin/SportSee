import { useData } from "../../utils/hooks/UseDataContext";
import './index.scss';

const Intro = () => {

    const { userData, isLoading, isError } = useData();

    return (
        <div className='intro'>
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userData && (
                <>
                    <h1>Bonjour <span className='userName'>{userData.userInfos.firstName}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </>
            )}
        </div>
    )
}

export default Intro;