import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import CreditCardLight from "../../components/CreditCardLight";
import Navbar from "../../components/Navbar";
function CreditLight(){
    const location = useLocation()
    console.log(location.state)
    const {statements} = location.state
    var {total} = location.state
    console.log(statements)
    console.log(total)
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">

                <CreditCardLight statements={statements} total={total} >

                </CreditCardLight>
            </div>
        </div>

    )
}
export default CreditLight