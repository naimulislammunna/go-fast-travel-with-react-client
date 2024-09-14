import { Outlet } from "react-router-dom";
import Hero from "../Header/Hero";
import OurServices from "../OurServices/OurServices";
import ServiceAnalysis from "../ServiceAnalysis/ServiceAnalysis";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <OurServices></OurServices>
            <Outlet></Outlet>
            <ServiceAnalysis></ServiceAnalysis>
        </div>
    );
};

export default Home;