import React from "react";
import './Home.css';
import Header from "./Header/Header";
import Article from "./Article/Article";
import Features from "./Features/Features";
import BannerHome from "./BannerHome/BannerHome";
import PricePage from "./PricePage/PricePage";
import Finalizacao from "./Finalizacao/Finalizacao";



function Home (){
    return(
        <>
        <div>
             < Header />
        </div>
        <div>
            < Article />
        </div>
        <div>
            < Features />
        </div>
        <div>
            <BannerHome />
        </div>
        <div>
            < PricePage />
        </div>
    
        <div>
            <Finalizacao />
        </div>
        </>
    )
}
export default Home