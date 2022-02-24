import {BrowserRouter, Routes, Route} from "react-router-dom";
import DarkPage from "./pages/dark";
import LightPage from "./pages/light";
import CreditDark from "./pages/dark/creditcard";
import CreditLight from "./pages/light/creditcard";
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DarkPage/>}/>
                <Route path="light" element={<LightPage/>}/>
                {/*<Route path="" element={<DarkPage/>}/>*/}
                <Route path="/card" element={<CreditDark/>}/>
                <Route path="light/card" element={<CreditLight/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App