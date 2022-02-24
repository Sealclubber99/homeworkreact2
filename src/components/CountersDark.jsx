import React, {Component, useRef} from "react";
import PropTypes from "prop-types";
import CounterDark from "./CounterDark";
import button from "bootstrap/js/src/button";
import {Link} from "react-router-dom";
//this structure was loosely based on this tutorial https://www.youtube.com/watch?v=Ke90Tje7VS0
class CountersDark extends Component {

    state = {
        counters_one: [
            {
                id: 1,
                value: 0,
                price: this.props.price_one[0],
                discount: this.props.discount_one[0],
                name: "American Sole",
            },
            { id: 2, value: 0, price: this.props.price_one[1], discount: this.props.discount_one[1], name: "Two for One Dover Sole" },
            { id: 3, value: 0, price: this.props.price_one[2],  discount: this.props.discount_one[2], name: "Rex Sole" },
        ],
        counters_two: [
            {
                id: 4,
                value: 0,
                price: this.props.price_two[0],
                discount: this.props.discount_two[0],
                name: "Southern Rock Sole",
            },
            { id: 5, value: 0, price: this.props.price_two[1], discount: this.props.discount_two[1], name: "Dover Sole" },
            {
                id: 6,
                value: 0,
                price: this.props.price_two[2],
                discount: this.props.discount_two[2],
                name: "Bigmouth Sole",
            },
        ],
        statements: {},
        total_cart: 0,
        button:"",

    };
    handleChange = (line, child_id, item_price) => {
        const temp = this.state.statements;

        if (line == "") {
            delete temp[child_id];
            this.setState({ statements: temp });
        } else {
            temp[child_id] = line;
            this.setState({ statements: temp });
        }
        this.setState({ total_cart: this.state.total_cart + item_price});
        if((this.state.total_cart + item_price) <1){
            this.setState({total_cart:0});
            this.setState({button:""});
        }
        else{
            this.setState({button:(
                    <Link to='/card' state={{statements:this.state.statements, total:(this.state.total_cart + item_price)}}>
                        <button className={"btn btn-primary"}>Complete Purchase</button>
                    </Link>

                )});
        }
        console.log();
    };
    render() {
        console.log("props", this.props);
        return (
            <div style={{display:"flex"}}>
                <div className={"col-md-8"}>
                    <div className={"row"}>
                        {this.state.counters_one.map((counter) => (
                            <CounterDark
                                key={counter.id}
                                value={counter.value}
                                selected={true}
                                id={counter.id}
                                price={counter.price}
                                discount={counter.discount}
                                name={counter.name}
                                handleChange={this.handleChange}
                            />
                        ))}
                    </div>
                    <div className={"row"}>
                        {this.state.counters_two.map((counter) => (
                            <CounterDark
                                key={counter.id}
                                value={counter.value}
                                selected={true}
                                id={counter.id}
                                price={counter.price}
                                discount={counter.discount}
                                name={counter.name}
                                handleChange={this.handleChange}
                            />
                        ))}
                    </div>

                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} className={"col-md-4 mt-4"}>
                    <ul>
                        {Object.entries(this.state.statements).map(([key, value]) => (
                            <li className={"list-group-item"}>{value}</li>
                        ))}
                        <li className={"list-group-item active"}>
                            Total Price: {this.state.total_cart}
                        </li>
                    </ul>
                    {this.state.button}

                </div>

            </div>
        );
    }
}

CountersDark.propTypes = {};

export default CountersDark;
