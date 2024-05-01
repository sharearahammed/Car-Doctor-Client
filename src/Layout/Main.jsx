import { Outlet } from 'react-router-dom';
import Footer from '../assets/Pages/Shared/Footer/Footer';
import Navbar from '../assets/Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;