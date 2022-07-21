import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Counts from "../components/Counts";
import Clients from "../components/Clients";


const success = () => {
    return (
        <>
        <Header />
        <Counts />
        <Clients />
        <Footer />
        <Copyright />
        </>
    );
};

export default success;