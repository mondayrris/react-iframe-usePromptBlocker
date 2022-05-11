// noinspection HtmlUnknownTarget

import logo from "../logo.svg";
import React from "react";
import {Link} from "@mui/material";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link href="/demo">Demo</Link>
            </header>
        </div>
    );
}

export default Home;