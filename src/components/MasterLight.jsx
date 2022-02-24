import React, {Component} from 'react';

import Navbar from "./Navbar";
import CountersLight from "./CountersLight";

const price_two_dark = [
    25.99,
    55.99,
    42.54
]
const price_one_dark = [
    32.99,
    84.99,
    61.54
]
class MasterLight extends Component {

    render() {

        return (
            <div className={"container-fluid m-0 p-0"}>
                <div className={"row"}>
                    <Navbar></Navbar>
                </div>
                <CountersLight price_one = {price_one_dark} price_two={price_two_dark} />
            </div>
        );
    }
}

export default MasterLight;