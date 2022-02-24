import React, {Component} from 'react';

import Navbar from "./Navbar";
import CountersDark from "./CountersDark";

const price_two_dark = [
    25.99,
    55.99,
    42.54
]
const price_one_dark = [
    32.99,
    120.99,
    61.54
]

const discounted_two_dark = [
    44.99,
    80.99,
    74.54
]
const discounted_one_dark = [
    45.99,
    180.99,
    75.54
]

class MasterDark extends Component {

    render() {

        return (
            <div className={"container-fluid m-0 p-0"}>
                <div className={"row"}>
                    <Navbar></Navbar>
                </div>
                <CountersDark price_one = {price_one_dark} price_two={price_two_dark} discount_one ={discounted_one_dark} discount_two={discounted_two_dark}/>
            </div>
        );
    }
}

export default MasterDark;