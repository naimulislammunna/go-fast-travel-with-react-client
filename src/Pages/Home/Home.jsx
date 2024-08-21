import Hero from "../Header/Hero";
import OurServices from "../OurServices/OurServices";
import ServiceAnalysis from "../ServiceAnalysis/ServiceAnalysis";
import TouristSpots from "../TouristSpot/TouristSpots";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TouristSpots></TouristSpots>
            <OurServices></OurServices>
            <ServiceAnalysis></ServiceAnalysis>
        </div>
    );
};

export default Home;