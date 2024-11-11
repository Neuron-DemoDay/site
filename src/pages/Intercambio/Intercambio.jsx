
import Anuncio from "./Anuncio/Anuncio";
import ArticleINT from "./ArticleINT/ArticleINT";
import HeaderINT from "./HeaderINT/HeaderINT";
import IaINT from "./IaINT/IaINT";
import InfoINT from "./InfoINT/InfoINT";
import StoryINT from "./StoryINT/StoryINT";


function Intercambio() {
    return (
        <>
        
            <div>
                <HeaderINT />
            </div>

            <div>
                < ArticleINT />
            </div>
            <div>
                <InfoINT />
            </div>
            <div>
                < StoryINT />
            </div>
            <div>
                <IaINT />
            </div>
            <div>
                <Anuncio />
            </div>
          
        </>
    )
}
export default Intercambio