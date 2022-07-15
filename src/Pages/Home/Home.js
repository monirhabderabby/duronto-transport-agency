import React from "react";
import { Link } from "react-router-dom";
import DurontoNavbar from "../../Shared/DurontoNavbar";

const Home = () => {
    return (
        <div>
            <DurontoNavbar />
            <Link to="/dashboard">
                <img
                    src="https://cocolafood.com/wp-content/uploads/2018/11/logo.jpg"
                    alt=""
                    className="sm:max-w-sm md:max-w-md lg:max-w-[400px] sm:max-h-sm md:max-h-md lg:max-h-[400px] mx-auto mt-2"
                />
            </Link>
        </div>
    );
};

export default Home;
