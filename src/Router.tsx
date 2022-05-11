import {BrowserRouter, Route, Routes} from "react-router-dom";
import Demo from "./pages/Demo";
import Home from "./pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/demo" element={<Demo/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;