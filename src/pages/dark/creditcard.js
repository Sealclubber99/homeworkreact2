import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import CreditCardDark from "../../components/CreditCardDark";
import Navbar from "../../components/Navbar";
function CreditDark(){
    const location = useLocation()
    console.log(location.state)
    const {statements} = location.state
    var {total} = location.state
    statements[7] = "Service Fee || $54.12"
    statements[8] = "Shipping and Handling || $12.12"
    total += (54.12 + 12.12);
    console.log(statements)
    console.log(total)
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">

                <CreditCardDark statements={statements} total={total} >

                </CreditCardDark>
            </div>
        </div>

    )
}
export default CreditDark